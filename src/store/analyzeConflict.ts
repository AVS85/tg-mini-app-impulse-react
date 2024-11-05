import { makeAutoObservable } from 'mobx';
import type RootStore from '.';
import api from '@/api/v1';
import { ChatMessagesItem, ChatMessagesT, PartyEnum } from '@/types/chat';

class AnalyzeConflictStore {
  rootStore: RootStore;

  chatHistory: ChatMessagesT | [] = [
    {
      party: PartyEnum.PARTY_B,
      content: 'Привет Марк!',
    },
  ];

  isFetchingPostMessage = false;

  setIsFetchingPostMessage = (value: boolean) => {
    this.isFetchingPostMessage = value;
  };

  constructor(rootStore: RootStore) {
    makeAutoObservable(this);
    this.rootStore = rootStore;
  }

  addItemChatHistory = (item: ChatMessagesItem) => {
    this.chatHistory = [...this.chatHistory, item];
  };

  /**
   * @description  Отправка сообщения на анализ
   */
  postMessage = async (messageText: string) => {
    try {
      this.setIsFetchingPostMessage(true);
      const clientId = this.rootStore.authStore.client?.id;

      if (clientId && messageText) {
        // добавление в чат сообщения пользователя
        this.addItemChatHistory({
          party: PartyEnum.PARTY_A,
          content: messageText,
        });

        // запрос
        const { data } = await api.analyzeConflict.post({
          clientId,
          conflict: messageText,
        });

        // добавление в чат ответа ai
        const { response: content } = data;
        this.addItemChatHistory({ party: PartyEnum.PARTY_B, content });
      }
    } catch (error) {
    } finally {
      this.setIsFetchingPostMessage(false);
    }
  };
}

export default AnalyzeConflictStore;
