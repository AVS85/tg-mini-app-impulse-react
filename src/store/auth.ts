import { makeAutoObservable, runInAction } from 'mobx';
import type RootStore from '.';
import api from '@/api/v1';
import { GetClientResponseI } from '@/api/v1/auth';

export enum AuthStepperEnum {
  LOGOUT = 'user.logout', // не авторизован
  PIN_REQUESTED = 'pin.requested', // пин запрошен пользователем
  PIN_POST_EMAIL = 'pin.post.email', // пин отправлен на почту
  PIN_POST = 'user.post.pin', // пользователь отправил пин на сервер
  LOGGED = 'user.logged', // пользователь авторизован
  FORBIDDEN = 'user.forbidden', // доступ запрещен
}

class AuthStore {
  rootStore: RootStore;

  // authStatus: AuthStepperEnum = AuthStepperEnum.LOGGED;
  authStatus: AuthStepperEnum = AuthStepperEnum.LOGOUT;

  client: GetClientResponseI | null = null;

  constructor(rootStore: RootStore) {
    makeAutoObservable(this);
    this.rootStore = rootStore;

    // autorun(() => {
    //   this.loadSessionAuth();
    // });
  }

  setAuthStatus = (status: AuthStepperEnum) => {
    this.authStatus = status;
  };

  checkLogin = async (email: string) => {
    try {
      await api.auth.check({ email });
      this.setAuthStatus(AuthStepperEnum.LOGGED);
    } catch (error) {
      //TODO убрать когда авторизация заработает нормально
      this.setAuthStatus(AuthStepperEnum.LOGGED);
      this.getClient();
      throw error;
    }
  };

  getClient = async () => {
    try {
      const { data } = await api.auth.getClient({ email: 'seo@ya.ru' });
      runInAction(() => {
        this.client = data;
      });
    } catch (error) {}
  };

  logout = () => {
    this.authStatus = AuthStepperEnum.LOGOUT;
    localStorage.setItem('authStatus', '');
  };
}

export default AuthStore;
