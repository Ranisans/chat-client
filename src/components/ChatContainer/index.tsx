import React, { useState, useEffect } from "react";

import RoomContainer from "../RoomContainer";

import {
  createMessage,
  updateMessageById,
  removeMessageById,
  loadData,
} from "./logic";
import {
  ISingleMessage,
  IChatContainer,
  RoomContainerCallback,
  Rooms,
  MessageState,
} from "../../types";

import "./ChatContainer.scss";
import ErrorWindow from "../ErrorWindow";

const ChatContainer: React.FC<IChatContainer> = ({
  currentUserName,
  userAvatar,
}: IChatContainer) => {
  const [messages, setMessages] = useState<ISingleMessage[]>([]);
  const [room, setRoom] = useState<Rooms>(Rooms.work);
  const [showError, setShowError] = useState<boolean>(false);

  const roomContainerCallback: RoomContainerCallback = (
    id,
    text,
    operation
  ) => {
    switch (operation) {
      case MessageState.create:
        setMessages(createMessage(messages, currentUserName, userAvatar, text));
        break;
      case MessageState.edit:
        setMessages(updateMessageById(messages, id, text));
        break;
      case MessageState.delete:
        setMessages(removeMessageById(messages, id));
        break;

      default:
        break;
    }
  };

  useEffect(() => {
    const asyncRoomUpdate = async () => {
      try {
        const result = await loadData(room);
        if (Array.isArray(result)) {
          setMessages(result);
        } else {
          throw new Error();
        }
      } catch (error) {
        setShowError(true);
      }
    };

    asyncRoomUpdate();
  }, [room]);

  const roomChanger = (activeRoom: Rooms) => {
    setRoom(activeRoom);
  };

  return (
    <div className="chat_container">
      <div className="chat_container-controls">
        <button
          type="button"
          className={`chat_container-room_button ${
            room === Rooms.work ? "chat_container-room_button--current" : ""
          }`}
          onClick={() => {
            roomChanger(Rooms.work);
          }}
        >
          {Rooms.work}
        </button>
        <button
          type="button"
          className={`chat_container-room_button ${
            room === Rooms.flood ? "chat_container-room_button--current" : ""
          }`}
          onClick={() => {
            roomChanger(Rooms.flood);
          }}
        >
          {Rooms.flood}
        </button>
      </div>
      <RoomContainer
        messages={messages}
        currentUserName={currentUserName}
        callback={roomContainerCallback}
      />
      {showError ? (
        <div
          role="button"
          aria-label="edit message"
          tabIndex={0}
          onClick={() => setShowError(false)}
          onKeyPress={() => setShowError(false)}
        >
          <ErrorWindow />
        </div>
      ) : null}
    </div>
  );
};

export default ChatContainer;
