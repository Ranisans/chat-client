import { v4 as uuidv4 } from "uuid";

import { SERVER_ADDRESS } from "../../constants/index";
import { ISingleMessage } from "../../types/index";

export const loadData = async (table: string): Promise<ISingleMessage[]> => {
  try {
    const response = await fetch(`${SERVER_ADDRESS}/${table}`);
    const data: ISingleMessage[] = await response.json();
    return data;
  } catch (error) {
    throw new Error(error);
  }
};

export const updateMessageById = (
  messages: ISingleMessage[],
  id: string,
  text: string
): ISingleMessage[] => {
  const newMessages = messages.map((message) => {
    if (message.id === id) {
      const newMessage = { ...message };
      newMessage.text = text;
      return newMessage;
    }
    return message;
  });

  return newMessages;
};

export const removeMessageById = (
  messages: ISingleMessage[],
  id: string
): ISingleMessage[] => {
  const newMessages = messages.filter((message) => message.id !== id);
  return newMessages;
};

export const createMessage = (
  messages: ISingleMessage[],
  name: string,
  avatar: string,
  text: string
): ISingleMessage[] => {
  const id = uuidv4();
  const newMessage = {
    id,
    avatar,
    name,
    text,
  };
  const newMessages = [...messages];
  newMessages.unshift(newMessage);
  return newMessages;
};
