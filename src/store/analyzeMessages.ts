import { makeAutoObservable } from 'mobx';
import type RootStore from '.';
import api from '@/api/v1';
import { ChatMessagesItem, ChatMessagesT, PartyEnum } from '@/types/chat';

class AnalyzeMessagesStore {
  rootStore: RootStore;

  chatHistory: ChatMessagesT | [] = [
    {
      party: PartyEnum.PARTY_B,
      content: 'Привет Олег!',
    },
  ];

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
  postMessage = async (analyze_message: string) => {
    try {
      const clientId = this.rootStore.authStore.client?.id;

      if (clientId && analyze_message) {
        // добавление в чат сообщения пользователя
        this.addItemChatHistory({
          party: PartyEnum.PARTY_A,
          content: analyze_message,
        });

        // запрос
        const { data } = await api.analyzeMessages.post({
          clientId,
          analyze_message,
        });

        // добавление в чат ответа ai
        const { response: content } = data;
        this.addItemChatHistory({ party: PartyEnum.PARTY_B, content });
      }
    } catch (error) {
    } finally {
    }
  };
}

export default AnalyzeMessagesStore;
