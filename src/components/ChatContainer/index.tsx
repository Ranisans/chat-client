import React, { useState, useEffect } from "react";

import RoomContainer from "../RoomContainer";

import {
  loadData,
  updateMessageByIdOnServer,
  removeMessageByIdOnServer,
  createMessageOnServer,
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

  const roomContainerCallback: RoomContainerCallback = async (
    id,
    text,
    operation
  ) => {
    switch (operation) {
      case MessageState.create: {
        const result = await createMessageOnServer(
          currentUserName,
          userAvatar,
          text,
          room
        );
        if (result) {
          asyncRoomUpdate();
        } else {
          //! error
        }
        break;
      }
      case MessageState.edit: {
        const result = await updateMessageByIdOnServer(id, text, room);
        console.log("result", result);
        if (result) {
          asyncRoomUpdate();
        } else {
          //! error
        }
        break;
      }
      case MessageState.delete: {
        const result = await removeMessageByIdOnServer(id, room);
        if (result) {
          asyncRoomUpdate();
        } else {
          //! error
        }
        break;
      }

      default:
        break;
    }
  };

  useEffect(() => {
    asyncRoomUpdate();
    // eslint-disable-next-line react-hooks/exhaustive-deps
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
