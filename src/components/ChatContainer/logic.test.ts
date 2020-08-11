import { ISingleMessage } from "../../types/index";
import {
  loadData,
  updateMessageById,
  removeMessageById,
  createMessage,
} from "./logic";

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

describe("load data from DB (server API)", () => {
  it("should load work room data from DB", async () => {
    const result = await loadData("work");
    expect(result.length).toBeGreaterThan(0);
  });
  it("should load flood room data from DB", async () => {
    const result = await loadData("work");
    expect(result.length).toBeGreaterThan(0);
  });
  it("should load nothing from DB if table doesn't exist", async () => {
    const result = await loadData("qwerty");
    expect(Array.isArray(result)).toBe(false);
  });
});

describe("update, create, delete message", () => {
  const position = 1;
  const { id } = messages[position];
  const text = "new Text";

  describe("update message by id", () => {
    it("should update message by id", () => {
      const result = updateMessageById(messages, id, text);
      expect(result).not.toEqual(messages);
      expect(result[position].text).toBe(text);
    });
    it("should return the same data if id doesn't exist", () => {
      const result = updateMessageById(messages, "asd-asd-da", text);
      expect(result).toEqual(messages);
    });
  });

  describe("delete message by id", () => {
    it("should remove message if id is exist", () => {
      const result = removeMessageById(messages, id);
      expect(result).not.toEqual(messages);
      expect(result.length).toBe(messages.length - 1);
    });
    it("should return the same data if id doesn't exist", () => {
      const result = removeMessageById(messages, "asdas-asda-qqwe");
      expect(result).toEqual(messages);
    });
  });

  describe("create message", () => {
    it("should create new message and put at the end of messages array", () => {
      const { name, avatar } = messages[position];
      const result = createMessage(messages, name, avatar, text);
      expect(result).not.toEqual(messages);
      expect(result.length).toBe(messages.length + 1);
      expect(result[result.length - 1]).toHaveProperty("id");
    });
  });
});
