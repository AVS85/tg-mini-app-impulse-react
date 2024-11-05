/* global Word console */

import React from 'react';

import Auth from './auth';
import AnalyzeConflict from './analyzeConflict';
import AnalyzeMessagesStore from './analyzeMessages';
import ChatStore from './chat';

class RootStore {
  authStore: Auth;
  analyzeConflictStore: AnalyzeConflict;
  analyzeMessagesStore: AnalyzeMessagesStore;
  chatStore: ChatStore;

  constructor() {
    this.authStore = new Auth(this);
    this.analyzeConflictStore = new AnalyzeConflict(this);

    this.analyzeMessagesStore = new AnalyzeMessagesStore(this);
    this.chatStore = new ChatStore(this);
  }
}

const StoresContext = React.createContext<RootStore>(new RootStore());

export const useStores = (): RootStore => React.useContext(StoresContext);

export default RootStore;
