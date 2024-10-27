import { makeAutoObservable } from 'mobx';
import type RootStore from '.';

export enum AuthStepperEnum {
  LOGOUT = 'user.logout',
  LOGGED = 'user.logged',
  FORBIDDEN = 'access.forbidden',
  ERROR = 'request.error',
}

class AuthStore {
  rootStore: RootStore;

  authStatus: AuthStepperEnum = AuthStepperEnum.LOGGED;
  // authStatus: AuthStepperEnum = AuthStepperEnum.LOGOUT;

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

  // logout = () => {
  //   this.authStatus = AuthStepperEnum.LOGOUT;
  //   // this.rootStore.menuStore.setMenuItem(null);
  //   localStorage.setItem("authStatus", "");
  // };
}

export default AuthStore;
