import React from "react";

import MessageBlock from "./index";

import { MessageCallback, ISingleMessage } from "../../types";

export default {
  title: "Message",
  component: MessageBlock,
};

const messageData: ISingleMessage = {
  id: "asda-asda-sds-zxcz",
  avatar:
    "https://s3.amazonaws.com/uifaces/faces/twitter/el_fuertisimo/128.jpg",
  name: "Main User",
  text:
    "Voluptatum aliquam enim <ve></ve>ro. Hic maiores natus non dolor. Assumenda qui quos ducimus. Magnam voluptas officiis praesentium quis dolores voluptatem soluta. Et consequatur ut et et fugiat est.\n \rOdio voluptas sunt excepturi eum voluptatem. Enim voluptas et velit iste ab. Tempore qui sit quaerat quibusdam. Porro neque exercitationem mollitia voluptas dolorem ut. Eos minus quis voluptate.\n \rNisi aut sapiente repellendus adipisci deserunt ut nam vitae. Incidunt nihil nesciunt excepturi non et molestiae eaque. Impedit blanditiis dolorum perspiciatis omnis suscipit praesentium cumque vel.",
};

const callback: MessageCallback = (id: string, isEdit: boolean) => {
  console.log(id, isEdit);
};

export const BaseMessage: React.FC = () => {
  return (
    <MessageBlock
      id={messageData.id}
      avatar={messageData.avatar}
      name={messageData.name}
      text={messageData.text}
      isCurrentUser={false}
      callback={callback}
    />
  );
};

export const CurrentUserMessage: React.FC = () => {
  return (
    <MessageBlock
      id={messageData.id}
      avatar={messageData.avatar}
      name={messageData.name}
      text={messageData.text}
      isCurrentUser
      callback={callback}
    />
  );
};
