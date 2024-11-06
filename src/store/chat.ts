import { makeAutoObservable } from 'mobx';
import type RootStore from '.';
import api from '@/api/v1';
import { ChatMessagesItem, ChatMessagesT, PartyEnum } from '@/types/chat';
import chatMock from './chatMock';

class ChatStore {
  rootStore: RootStore;

  chatHistory: ChatMessagesT | [] = chatMock;
  // chatHistory: ChatMessagesT | [] = [
  //   {
  //     party: PartyEnum.PARTY_B,
  //     content: 'Привет Олег!',
  //   },
  // ];

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
  postMessage = async (question: string) => {
    try {
      this.setIsFetchingPostMessage(true);
      const clientId = this.rootStore.authStore.client?.id;

      if (clientId && question) {
        // добавление в чат сообщения пользователя
        this.addItemChatHistory({
          party: PartyEnum.PARTY_A,
          content: question,
        });

        // запрос
        const { data } = await api.chat.post({
          clientId,
          question,
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

export default ChatStore;
