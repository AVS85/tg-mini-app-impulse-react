/* global Word console */

import React from 'react';

import Auth from './auth';
import AnalyzeConflict from './analyzeConflict';

class RootStore {
  authStore: Auth;
  analyzeConflictStore: AnalyzeConflict;

  constructor() {
    this.authStore = new Auth(this);
    this.analyzeConflictStore = new AnalyzeConflict(this);
  }
}

const StoresContext = React.createContext<RootStore>(new RootStore());

export const useStores = (): RootStore => React.useContext(StoresContext);

export default RootStore;
