import { makeAutoObservable } from 'mobx';
import type RootStore from '.';
import api from '@/api/v1';

export enum AuthStepperEnum {
  LOGOUT = 'user.logout',
  LOGGED = 'user.logged',
  FORBIDDEN = 'access.forbidden',
  ERROR = 'request.error',
}

class AuthStore {
  rootStore: RootStore;

  // authStatus: AuthStepperEnum = AuthStepperEnum.LOGGED;
  authStatus: AuthStepperEnum = AuthStepperEnum.LOGOUT;

  constructor(rootStore: RootStore) {
    makeAutoObservable(this);
    this.rootStore = rootStore;

    // autorun(() => {
    //   this.loadSessionAuth();
    // });
  }

  // setAuthStatus = (status: AuthStepperEnum) => {
  //   this.authStatus = status;
  // };

  checkLogin = async (email: string) => {
    try {
      await api.auth.check(email);
    } catch (error) {
      console.log('error', error);
      throw '[checkLogin] error';
    }
  };

  logout = () => {
    this.authStatus = AuthStepperEnum.LOGOUT;
    localStorage.setItem('authStatus', '');
  };
}

export default AuthStore;
