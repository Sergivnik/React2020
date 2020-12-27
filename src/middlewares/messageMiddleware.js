import { sendMessage } from "../actions/messageActions.js";
import { fireChat } from "../actions/fire.js";
import { db } from "../services/firebase.js";

let timeOutId;
export const sendMessageThunk = (messageId, text, sender, chatId) => {
  return (dispatch) => {
    const newmessage = db.ref("messages").push();
    newmessage.update({
      2: {
        chatNumber: chatId,
        content: text,
        id: messageId,
        name: sender,
      },
    });

    dispatch(sendMessage(messageId, text, sender, chatId));
    if (sender != "Robot") {
      clearTimeout(timeOutId);
      timeOutId = setTimeout(() => {
        dispatch(
          sendMessage(
            messageId + 1,
            "Не приставай ко мне, я робот!",
            "Robot",
            chatId
          )
        );
        dispatch(fireChat(true, chatId));
      }, 1000);
      setTimeout(() => {
        dispatch(fireChat(false, chatId));
      }, 3500);
    }
  };
};
