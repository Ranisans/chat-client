import React from "react";

import RoomContainer from "./index";
import { RoomContainerCallback, ISingleMessage } from "../../types";

export default {
  title: "Room Container",
  components: RoomContainer,
};

const callback: RoomContainerCallback = (id, text, operation) => {
  console.log(
    "callback:RoomContainerCallback -> id, text, operation",
    id,
    text,
    operation
  );
};

const messages: ISingleMessage[] = [
  {
    id: "42c5b53e-918b-404b-815a-9503e7aa411a",
    avatar:
      "https://s3.amazonaws.com/uifaces/faces/twitter/el_fuertisimo/128.jpg",
    name: "Stephon Hoppe",
    text:
      "Unde ut eum dolor autem impedit voluptates libero at maiores.\nNihil eaque modi sed.\nConsectetur quas voluptas laboriosam natus nam optio maiores.",
  },
  {
    id: "6fbe024f-2316-4265-a6e8-d65a837e308a",
    avatar: "https://s3.amazonaws.com/uifaces/faces/twitter/stephcoue/128.jpg",
    name: "Haylee Klocko",
    text:
      "Itaque velit omnis et. Ut et ipsam explicabo eligendi occaecati debitis et. Eum dicta eum eaque enim ipsum inventore debitis libero aspernatur. Quam tempore a velit provident velit eligendi.",
  },
  {
    id: "620e8f67-6552-43b9-9474-a9d8a27892bc",
    avatar: "https://s3.amazonaws.com/uifaces/faces/twitter/gcmorley/128.jpg",
    name: "Rubie Little",
    text:
      "Dolor beatae ut quas exercitationem et quis molestiae fugit. Sit consequuntur dolores. Error tempora modi odit assumenda eius in. Dolorem totam consequatur sed totam.",
  },
  {
    id: "81bd4189-e6e0-4203-b017-b0277a345a79",
    avatar: "https://s3.amazonaws.com/uifaces/faces/twitter/stephcoue/128.jpg",
    name: "Albertha Runolfsson",
    text:
      "Ea esse omnis veniam nemo. Officia odio ad nesciunt blanditiis perspiciatis possimus dolor. Nemo quaerat modi saepe iure porro itaque voluptatem reiciendis. Tempore voluptas ut consequatur. In vel nihil sunt esse et repellendus iste quo. Voluptatem tempora ipsam voluptate error.",
  },
  {
    id: "fe82fdb9-b932-4f30-b4e6-ac039d5f9269",
    avatar: "https://s3.amazonaws.com/uifaces/faces/twitter/stephcoue/128.jpg",
    name: "Haylee Klocko",
    text: "Ipsa facilis a consequatur iusto.",
  },
  {
    id: "30dd35ef-7196-4c58-b4f3-c1abd732ce14",
    avatar: "https://s3.amazonaws.com/uifaces/faces/twitter/dhooyenga/128.jpg",
    name: "Harrison Carter",
    text:
      "Et cupiditate culpa quos animi minus ut perferendis veniam explicabo.",
  },
  {
    id: "ef53d105-1f91-4896-8579-d7cb68392abf",
    avatar: "https://s3.amazonaws.com/uifaces/faces/twitter/doronmalki/128.jpg",
    name: "Reese Kozey",
    text: "Debitis et dolorem praesentium illo tempore porro ratione.",
  },
  {
    id: "13c57fb7-f484-4811-a407-8adc5661a4ae",
    avatar: "https://s3.amazonaws.com/uifaces/faces/twitter/stephcoue/128.jpg",
    name: "Haylee Klocko",
    text:
      "Voluptatem accusantium placeat animi aliquam hic pariatur incidunt quia unde. Voluptates itaque dolores ducimus cupiditate eum placeat ea libero. Totam aut quia atque. Laborum quis hic voluptatum ut consequatur. Quo ducimus assumenda a ipsam. Sunt qui ad vitae.",
  },
  {
    id: "d0f3d68d-3609-46c6-a8d7-e828bc6bd906",
    avatar: "https://s3.amazonaws.com/uifaces/faces/twitter/rikas/128.jpg",
    name: "Edyth Kshlerin",
    text:
      "Illo eius ut et nostrum.\nCum consequuntur ullam quia sit quasi odio modi provident qui.\nEveniet excepturi ut tempore maiores quia doloremque sit aliquid ad.\nSunt voluptas distinctio itaque veniam voluptatem.\nEt fugit enim nam.",
  },
];

const currentUserName = "Haylee Klocko";

export const Base: React.FC = () => {
  return (
    <RoomContainer
      messages={messages}
      currentUserName={currentUserName}
      callback={callback}
    />
  );
};
