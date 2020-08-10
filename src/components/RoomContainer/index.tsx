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
      // setEditedMessageId
      // setEditedMessageText
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
      <MessagesBlock
        messages={messages}
        currentUserName={currentUserName}
        rowHeight={MESSAGE_HEIGHT}
        viewportHeight={VIEWPORT_HEIGHT}
        callback={messageCallback}
      />
      <NewMessage
        id={editedMessageId}
        text={editedMessageText}
        callback={newMessageCallback}
      />
    </div>
  );
};

export default RoomContainer;
