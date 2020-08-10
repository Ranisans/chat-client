import React, { useEffect, useState } from "react";

import MessagesBlock from "../MessagesBlock";
import NewMessage from "../NewMessage";

import {
  IRoomContainer,
  ISingleMessage,
  MessageCallback,
  MessageState,
  NewMessageCallback,
} from "../../types";
import { MESSAGE_HEIGHT, VIEWPORT_HEIGHT } from "../../constants";

import "./RoomContainer.scss";
import getMessageById from "./logic";

const RoomContainer: React.FC<IRoomContainer> = ({
  messages: messagesArray,
  currentUserName,
  callback,
}: IRoomContainer) => {
  const [messages, setMessages] = useState<ISingleMessage[]>([]);
  const [editedMessageId, setEditedMessageId] = useState("");
  const [editedMessageText, setEditedMessageText] = useState("");

  useEffect(() => {
    setMessages(messagesArray);
  }, [messagesArray]);

  const messageCallback: MessageCallback = (id, isEdit) => {
    if (isEdit) {
      // get message by id
      const message = getMessageById(messages, id);
      // if message by id is exist
      if (message) {
        setEditedMessageId(id);
        setEditedMessageText(message.text);
      }
    } else {
      callback(id, "", MessageState.delete);
    }
  };

  const newMessageCallback: NewMessageCallback = (id, text) => {
    let operation = MessageState.create;
    if (id !== "") {
      operation = MessageState.edit;
    }
    callback(id, text, operation);
    setEditedMessageId("");
    setEditedMessageText("");
  };

  return (
    <div className="room">
      <div className="room-messages">
        <MessagesBlock
          messages={messages}
          currentUserName={currentUserName}
          rowHeight={MESSAGE_HEIGHT}
          viewportHeight={VIEWPORT_HEIGHT}
          callback={messageCallback}
        />
      </div>
      <div className="room-new_message">
        <NewMessage
          id={editedMessageId}
          text={editedMessageText}
          callback={newMessageCallback}
        />
      </div>
    </div>
  );
};

export default RoomContainer;
