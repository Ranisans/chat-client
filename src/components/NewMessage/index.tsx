import React, { useState, useEffect } from "react";

import { INewMessage } from "../../types";

import "./NewMessage.scss";

const NewMessage: React.FC<INewMessage> = ({
  id,
  text,
  callback,
}: INewMessage) => {
  const [message, setMessage] = useState("");
  const [messageId, setMessageId] = useState("");

  useEffect(() => {
    setMessage(text);
    setMessageId(id);
  }, [id, text]);

  const buttonHandler = () => {
    callback(messageId, message);
  };

  const cancelHandler = () => {
    setMessage("");
    setMessageId("");
  };

  return (
    <div className="new_message">
      <textarea
        className="new_message-text"
        name="new message text"
        value={message}
        onChange={(e: React.ChangeEvent<HTMLTextAreaElement>) =>
          setMessage(e.currentTarget.value)
        }
      />
      <div className="button_block">
        <button
          type="button"
          className={`new_message-button new_message-button_send ${
            messageId !== "" ? "new_message-button_send--edit" : ""
          }`}
          onClick={buttonHandler}
        >
          {messageId !== "" ? "Change" : "Send"}
        </button>
        <button
          type="button"
          className="new_message-button new_message-button_cancel"
          onClick={cancelHandler}
        >
          Cancel
        </button>
      </div>
    </div>
  );
};

export default NewMessage;
