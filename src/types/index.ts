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

export interface IMessagesBlock {
  messages: ISingleMessage[];
  currentUserName: string;
  rowHeight: number;
  viewportHeight: number;
  callback: MessageCallback;
}

export type NewMessageCallback = (id: string, text: string) => void;

export interface INewMessage {
  id: string;
  text: string;
  callback: NewMessageCallback;
}

export enum MessageState {
  create,
  edit,
  delete,
}

export type RoomContainerCallback = (
  id: string,
  text: string,
  operation: MessageState
) => void;

export interface IRoomContainer {
  messages: ISingleMessage[];
  currentUserName: string;
  callback: RoomContainerCallback;
}
