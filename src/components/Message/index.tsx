import React from "react";

import { IMessage } from "../../types";

import "./Message.scss";

const MessageBlock: React.FC<IMessage> = ({
  id,
  avatar,
  name,
  text,
  isCurrentUser,
  callback,
}: IMessage) => {
  const editHandler = () => {
    callback(id, true);
  };

  const deleteHandler = () => {
    callback(id, false);
  };

  return (
    <div className={`message ${isCurrentUser ? "message--current" : ""}`}>
      <div
        className={`message-user_block ${
          isCurrentUser ? "message-user_block--current" : ""
        }`}
      >
        <img src={avatar} alt="avatar" className="message-avatar" />
        <p className="message-name">{name}</p>
      </div>
      <div
        className={`message-text ${
          isCurrentUser ? "message-text--current" : ""
        }`}
      >
        {text}
        {isCurrentUser ? (
          <div className="message-icon_block">
            <div
              className="message-icon message-edit"
              role="button"
              aria-label="edit message"
              tabIndex={0}
              onKeyPress={editHandler}
              onClick={editHandler}
            />
            <div
              className="message-icon message-delete"
              role="button"
              aria-label="edit message"
              tabIndex={0}
              onKeyPress={deleteHandler}
              onClick={deleteHandler}
            />
          </div>
        ) : null}
      </div>
    </div>
  );
};

export default MessageBlock;
