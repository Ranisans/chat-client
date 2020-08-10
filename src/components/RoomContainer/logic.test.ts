import { ISingleMessage } from "../../types/index";
import getMessageById from "./logic";

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
];
describe("get message by id", () => {
  it("should return correct message by id if id is exist in messages array", () => {
    const result = getMessageById(messages, messages[1].id);
    expect(result).toBe(messages[1]);
  });
  it("should return null if id isn't exist in messages array", () => {
    const result = getMessageById(messages, "asdasdasd-asdasd-asd");
    expect(result).toBeNull();
  });
});
