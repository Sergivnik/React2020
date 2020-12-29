import { addChat } from "../actions/chatActions.js";
import { deleteChat } from "../actions/chatDelete.js";
import { db } from "../services/firebase.js";

export const addChatThunk = (chatKey, name, age) => {
  return (dispatch) => {
    const newChat = db.ref("chats").push();
    const keyChat = newChat.key;
    newChat.set({ id: keyChat, age: age, nameId: name });
    dispatch(addChat(keyChat, name, age));
  };
};

export const deleteChatThunk = (chatKey) => {
  return (dispatch) => {
    const findChat = db.ref("chats/" + chatKey);
    findChat.remove();
    const filterMessages = db.ref("messages/").child("chatNumber" + chatKey);
    filterMessages.remove();
    dispatch(deleteChat(chatKey));
  };
};
