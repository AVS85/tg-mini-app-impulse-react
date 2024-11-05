import { autorun, makeAutoObservable } from 'mobx';
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

// type LocalStoreAuthInfoT = {
//     authStatus: AuthStepperEnum,
//     clientInfo: GetClientResponseI,
// }
class AuthStore {
  rootStore: RootStore;

  authStatus: AuthStepperEnum = AuthStepperEnum.LOGOUT;

  client: GetClientResponseI | null = null;

  inProgressEntrancePath = false;
  setInProgressEntrancePath = (value: boolean) => {
    this.inProgressEntrancePath = value;
  };

  constructor(rootStore: RootStore) {
    makeAutoObservable(this);
    this.rootStore = rootStore;

    autorun(() => {
      // TODO: тут нужна проверка на соответствие типу
      const aimpulseAuth = localStorage.getItem('AimpulseAuth');
      if (aimpulseAuth) {
        const { clientInfo } = JSON.parse(aimpulseAuth);
        this.login(clientInfo);
      }
    });
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
      this.setInProgressEntrancePath(true);
      await this.clientSave(email);
      const clientInfo = await this.clientGet(email);
      const { id: clientId } = clientInfo;
      if (clientId) {
        await this.authAdd(clientId);
        const { data } = await this.authCheck(email);
        if (data?.isAccess === true) this.login(clientInfo);
      }
    } catch (error) {
      this.cleanup();
    } finally {
      this.setInProgressEntrancePath(false);
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

      return data;
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
      return await api.auth.authCheck({ email });
    } catch (error) {
      throw `[authCheck]: ${error}`;
    }
  };

  login = (clientInfo: GetClientResponseI, authStatus?: AuthStepperEnum) => {
    this.client = clientInfo;
    this.authStatus = authStatus ?? AuthStepperEnum.LOGGED;
    localStorage.setItem(
      'AimpulseAuth',
      JSON.stringify({
        authStatus: authStatus ?? AuthStepperEnum.LOGGED,
        clientInfo,
      })
    );
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
