export const CHANGE_MESSAGE = "@@message/CHANGE_MESSAGE";

export const changeMessage = (
  messageId,
  text,
  sender,
  chatId,
  typeOfChange
) => ({
  type: CHANGE_MESSAGE,
  messageId,
  text,
  sender,
  chatId,
  typeOfChange,
});
