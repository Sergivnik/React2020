import { sendMessage } from "../actions/messageActions.js";
import { fireChat } from "../actions/fire.js";
import { db } from "../services/firebase.js";

let timeOutId;
export const sendMessageThunk = (messageId, text, sender, chatId) => {
  return (dispatch) => {
    db.ref("messages").push({
      chatNumber: chatId,
      content: text,
      id: messageId,
      name: sender,
    });

    if (sender != "Robot") {
      clearTimeout(timeOutId);
      timeOutId = setTimeout(() => {
        db.ref("messages").push({
          chatNumber: chatId,
          content: "Не приставай ко мне, я робот!",
          id: messageId,
          name: "Robot",
        });
        dispatch(fireChat(true, chatId));
      }, 1000);
      setTimeout(() => {
        dispatch(fireChat(false, chatId));
      }, 3500);
    }
  };
};
