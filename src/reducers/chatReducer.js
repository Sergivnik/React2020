import update from "react-addons-update";
import { ADD_CHAT } from "../actions/chatActions";
import { SEND_MESSAGE } from "../actions/messageActions";
import { CHANGE_MESSAGE } from "../actions/messageChange.js";

const ROBOT = "Robot";
const initialStore = {
  chats: [
    { id: 1, nameId: "ФедорРРР", age: 54 },
    { id: 2, nameId: "Петро", age: 82 },
    { id: 3, nameId: "Оксана", age: 18 },
    { id: 4, nameId: "Вальдемар", age: 27 },
  ],
  messages: [
    { name: ROBOT, content: "Привет", id: 1, chatNumber: 1 },
    { name: ROBOT, content: "Как поживаешь?", id: 2, chatNumber: 1 },
  ],
};

export default function chatReducer(store = initialStore, action) {
  switch (action.type) {
    case ADD_CHAT: {
      const id = Object.keys(store.chats).length + 1;
      return update(store, {
        chats: {
          $merge: {
            [id - 1]: { id: id, nameId: action.name, age: action.age },
          },
        },
      });
    }
    case SEND_MESSAGE: {
      const id = Object.keys(store.messages).length + 1;
      return update(store, {
        messages: {
          $merge: {
            [id - 1]: {
              name: action.sender,
              content: action.text,
              id: id,
              chatNumber: action.chatId,
            },
          },
        },
      });
    }
    case CHANGE_MESSAGE: {
      //let arr = Object.assign([], store.messages);
      let arr = store.messages.filter((item) => item.id !== action.messageId);
      console.log(arr, store.messages);
      return { ...store, messages: [...arr] };
    }
    default:
      return store;
  }
}
