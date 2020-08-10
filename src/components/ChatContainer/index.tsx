import React, { useState, useEffect } from "react";

import RoomContainer from "../RoomContainer";
import {
  ISingleMessage,
  IChatContainer,
  RoomContainerCallback,
  Rooms,
  MessageState,
} from "../../types";

const ChatContainer: React.FC<IChatContainer> = ({
  currentUserName,
  userAvatar,
}: IChatContainer) => {
  const [messages, setMessages] = useState<ISingleMessage[]>([]);
  const [room, setRoom] = useState<Rooms>(Rooms.work);

  const roomContainerCallback: RoomContainerCallback = (
    id,
    text,
    operation
  ) => {
    switch (operation) {
      case MessageState.create:
        // create new message
        break;
      case MessageState.edit:
        // update message by id
        break;
      case MessageState.delete:
        // delete message by id
        break;

      default:
        break;
    }
  };

  useEffect(() => {
    // load messages from server
    // setMessages()
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
    </div>
  );
};

export default ChatContainer;
