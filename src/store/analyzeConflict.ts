import { makeAutoObservable } from 'mobx';
import type RootStore from '.';
import api from '@/api/v1';

class AnalyzeConflictStore {
  rootStore: RootStore;

  textContractSource: string | null = null;

  textContractAnonymized: string | null = null;

  constructor(rootStore: RootStore) {
    makeAutoObservable(this);
    this.rootStore = rootStore;

    /**
     * @description Реакция срабатывает на ..
     */

    // reaction(
    //   () => this.textContractAnonymized,
    //   () => {
    // console.log("textContractAnonymized [updated]");
    // }
    // );
  }

  /**
   * @description  Отправка сообщения о конфликте на анализ
   */
  conflictPostMessage = async () => {
    try {
      const response = await api.analyzeConflict.sendMessage({
        userId: '',
        conflict: '',
      });
      return response;
    } catch (error) {
    } finally {
    }
  };
}

export default AnalyzeConflictStore;
