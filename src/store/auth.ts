import { makeAutoObservable, runInAction } from 'mobx';
import type RootStore from '.';
import api from '@/api/v1';
import { GetClientResponseI } from '@/types/api';

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
  // client: GetClientResponseI | null = {
  //   email: 'seo@ya.ru',
  //   full_name: null,
  //   id: '088f3535-6f8c-4b71-ae9f-e162ceb2ec98',
  //   phone_number: null,
  //   telegram_id: null,
  //   user_name: null,
  // };

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

  entrancePath = async (email: string) => {
    /**
     * 1. отправляем почту клиента
     * 2. получаем данные созданного клиента
     * 3. отправляем clientId в auth (как это работает?)
     * 4. получаем состояние авторизации :))
     */

    try {
      console.log('entrancePath [1]...');

      const response1 = await this.clientSave(email);
      console.log('entrancePath [1] response:', response1);

      console.log('entrancePath [2]...');
      const response2 = await this.clientGet(email);
      console.log('entrancePath [2] response:', response2);

      console.log('entrancePath [3]...', {
        client: this.client,
      });
      const clientId = this.client?.id;
      if (clientId) {
        const response3 = await this.authAdd(clientId);
        console.log('entrancePath [3] response:', response3);

        console.log('entrancePath [4]...');
        const response4 = await this.authCheck(email);
        console.log('entrancePath [4] response:', response4);
      }
    } catch (error) {
      //
    }
  };

  clientSave = async (email: string) => {
    try {
      await api.auth.clientSave({ email });
    } catch (error) {
      throw `[saveClient]: ${error}`;
    }
  };

  clientGet = async (email: string) => {
    try {
      const { data } = await api.auth.clientGet({ email });
      runInAction(() => {
        this.client = data;
      });
    } catch (error) {
      throw `[clientGet]: ${error}`;
    }
  };

  authAdd = async (clientId: string) => {
    try {
      await api.auth.authAdd({ clientId });
    } catch (error) {
      throw `[authAdd]: ${error}`;
    }
  };

  authCheck = async (email: string) => {
    try {
      await api.auth.authCheck({ email });
    } catch (error) {
      throw `[authCheck]: ${error}`;
    }
  };

  login = () => {
    this.authStatus = AuthStepperEnum.LOGGED;
    localStorage.setItem('authStatus', AuthStepperEnum.LOGGED);
  };

  logout = () => {
    this.authStatus = AuthStepperEnum.LOGOUT;
    localStorage.setItem('authStatus', '');
  };

  cleanup = () => {
    this.authStatus = AuthStepperEnum.LOGOUT;
    this.client = null;
  };
}

export default AuthStore;
