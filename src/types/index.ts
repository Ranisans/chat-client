export type MessageCallback = (id: string, isEdit: boolean) => void;

export interface ISingleMessage {
  id: string;
  avatar: string;
  name: string;
  text: string;
}

export interface IMessage extends ISingleMessage {
  isCurrentUser: boolean;
  callback: MessageCallback;
}
