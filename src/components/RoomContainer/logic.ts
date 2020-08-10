import { ISingleMessage } from "../../types/index";

const getMessageById = (
  data: ISingleMessage[],
  id: string
): ISingleMessage | null => {
  const result = data.filter((message) => message.id === id);
  if (result.length) {
    return result[0];
  }
  return null;
};

export default getMessageById;
