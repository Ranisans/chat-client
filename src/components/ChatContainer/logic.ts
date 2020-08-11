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

export const getMessageByIdOnServer = async (
  id: string,
  room: string
): Promise<ISingleMessage | null> => {
  try {
    console.log("SERVER_ADDRESS/room/id", `${SERVER_ADDRESS}/${room}/${id}`);
    const response = await fetch(`${SERVER_ADDRESS}/${room}/${id}`);
    const data: ISingleMessage = await response.json();
    console.log("data", data);
    if (data) {
      return data;
    }
    return null;
  } catch (error) {
    return null;
  }
};

export const updateMessageByIdOnServer = async (
  id: string,
  text: string,
  room: string
): Promise<boolean> => {
  try {
    const message = await getMessageByIdOnServer(id, room);
    console.log("message", message);
    if (message === null) {
      throw new Error();
    }

    const response = await fetch(`${SERVER_ADDRESS}/${room}/${id}`, {
      method: "PUT",
      mode: "cors",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ ...message, text }),
    });
    const data = await response.json();
    if (data.id === message.id) {
      return true;
    }
    return false;
  } catch (error) {
    return false;
  }
};

export const removeMessageById = (
  messages: ISingleMessage[],
  id: string
): ISingleMessage[] => {
  const newMessages = messages.filter((message) => message.id !== id);
  return newMessages;
};

export const removeMessageByIdOnServer = async (
  id: string,
  room: string
): Promise<boolean> => {
  try {
    await fetch(`${SERVER_ADDRESS}/${room}/${id}`, {
      method: "DELETE",
      mode: "cors",
      headers: {
        "Content-Type": "application/json",
      },
    });
    return true;
  } catch (error) {
    return false;
  }
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

export const createMessageOnServer = async (
  name: string,
  avatar: string,
  text: string,
  room: string
): Promise<boolean> => {
  try {
    const id = uuidv4();
    console.log("id", id);
    const response = await fetch(`${SERVER_ADDRESS}/${room}`, {
      method: "POST",
      mode: "cors",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ id, avatar, name, text }),
    });
    const data = await response.json();
    console.log("data", data);
    if (data) {
      return true;
    }
    return false;
  } catch (error) {
    return false;
  }
};
