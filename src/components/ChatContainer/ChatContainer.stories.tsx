import React from "react";

import ChatContainer from "./index";

export default {
  title: "Chat Container",
  components: ChatContainer,
};

const currentUserName = "Haylee Klocko";
const userAvatar =
  "https://s3.amazonaws.com/uifaces/faces/twitter/stephcoue/128.jpg";

export const Base: React.FC = () => {
  return (
    <ChatContainer currentUserName={currentUserName} userAvatar={userAvatar} />
  );
};
