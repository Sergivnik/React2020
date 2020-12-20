import update from "react-addons-update";
import { ADD_CHAT } from "../actions/chatActions";
import { SEND_MESSAGE } from "../actions/messageActions";
import { CHANGE_MESSAGE } from "../actions/messageChange.js";
import { FIRE_CHAT } from "../actions/fire.js";

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
  qiote: "",
  fire: { fire: false, id: null },
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
    case FIRE_CHAT: {
      return update(store, {
        fire: { $set: { fire: action.fire, id: action.id } },
      });
    }
    case CHANGE_MESSAGE: {
      let arr;
      let textQiote;
      if (action.typeOfChange == "qiote") {
        textQiote = action.text;
        return { ...store, qiote: textQiote };
      }
      if (action.typeOfChange == "delete") {
        arr = store.messages.filter((item) => item.id !== action.messageId);
        return { ...store, messages: [...arr] };
      }
      if (action.typeOfChange == "edit") {
        arr = store.messages.map((item) => {
          if (item.id !== action.messageId) {
            return item;
          } else {
            item.content = action.text;
            return item;
          }
        });
      }
      return { ...store, messages: [...arr] };
    }
    default:
      return store;
  }
}
