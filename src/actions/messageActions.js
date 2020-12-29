export const SEND_MESSAGE = "@@message/SEND_MESSAGE";

export const sendMessage = (keyMessage, text, sender, chatId) => ({
  type: SEND_MESSAGE,
  keyMessage,
  text,
  sender,
  chatId,
});
