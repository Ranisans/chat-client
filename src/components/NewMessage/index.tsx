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
      <button
        type="button"
        className={`new_message-button ${
          messageId !== "" ? "new_message-button---edit" : ""
        }`}
        onClick={buttonHandler}
      >
        {messageId !== "" ? "Change" : "Send"}
      </button>
    </div>
  );
};

export default NewMessage;
