import React from "react";

import NewMessage from "./index";
import { NewMessageCallback } from "../../types";

export default {
  title: "New Message",
  component: NewMessage,
};

const callback: NewMessageCallback = (id, text) => {
  console.log(id, text);
};

export const EmptyMessage: React.FC = () => {
  const message = {
    id: "",
    text: "",
  };

  return <NewMessage id={message.id} text={message.text} callback={callback} />;
};

export const EditMessage: React.FC = () => {
  const message = {
    id: "ass-avxv-fasas-xvxc",
    text:
      "Voluptatum aliquam enim <ve></ve>ro. Hic maiores natus non dolor. Assumenda qui quos ducimus. Magnam voluptas officiis praesentium quis dolores voluptatem soluta. Et consequatur ut et et fugiat est.\n \rOdio voluptas sunt excepturi eum voluptatem. Enim voluptas et velit iste ab. Tempore qui sit quaerat quibusdam. Porro neque exercitationem mollitia voluptas dolorem ut. Eos minus quis voluptate.\n \rNisi aut sapiente repellendus adipisci deserunt ut nam vitae. Incidunt nihil nesciunt excepturi non et molestiae eaque. Impedit blanditiis dolorum perspiciatis omnis suscipit praesentium cumque vel.",
  };

  return <NewMessage id={message.id} text={message.text} callback={callback} />;
};
