export enum PartyEnum {
  'PARTY_A',
  'PARTY_B',
}

export type ChatMessagesItem = {
  party: PartyEnum;
  content: string;
};

export type ChatMessagesT = Array<ChatMessagesItem>;
