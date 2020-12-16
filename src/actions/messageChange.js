export const CHANGE_MESSAGE = "@@message/CHANGE_MESSAGE";

export const changeMessage = (
  messageId,
  text,
  typeOfChange
) => ({
  type: CHANGE_MESSAGE,
  messageId,
  text,
  typeOfChange,
});
