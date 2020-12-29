import { sendMessage } from "../actions/messageActions.js";
import { changeMessage } from "../actions/messageChange";
import { fireChat } from "../actions/fire.js";
import { db } from "../services/firebase.js";

let timeOutId;
export const sendMessageThunk = (messageId, text, sender, chatId) => {
  return (dispatch) => {
    const keyMessage = db.ref("messages").push({
      chatNumber: chatId,
      content: text,
      name: sender,
    }).key;
    dispatch(sendMessage(keyMessage, text, sender, chatId));
    if (sender != "Robot") {
      clearTimeout(timeOutId);
      timeOutId = setTimeout(() => {
        const keyMessage = db.ref("messages").push({
          chatNumber: chatId,
          content: "Не приставай ко мне, я робот!",
          name: "Robot",
        }).key;
        dispatch(
          sendMessage(
            keyMessage,
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

export const changeMessageThunk = (messageId, text, typeOfChange) => {
  return (dispatch) => {
    if (typeOfChange == "delete") {
      const findMessage = db.ref("messages/" + messageId);
      findMessage.remove();
      dispatch(changeMessage(messageId, text, typeOfChange));
    }
    if (typeOfChange == "edit") {
      let updates = {};
      updates["messages/" + messageId + "/content"] = text;
      db.ref().update(updates);
      dispatch(changeMessage(messageId, text, typeOfChange));
    }
    if (typeOfChange == "qiote") {
      dispatch(changeMessage(messageId, text, typeOfChange));
    }
  };
};
