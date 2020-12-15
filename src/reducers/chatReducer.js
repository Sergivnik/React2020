import update from "react-addons-update";
import { ADD_CHAT } from "../actions/chatActions";
// import { SEND_MESSAGE } from "../actions/messageActions";

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
    { name: ROBOT, content: "Как дела?", id: 2, chatNumber: 1 },
  ],
};

export default function chatReducer(store = initialStore, action) {
  switch (action.type) {
    case ADD_CHAT: {
      const id = Object.keys(store.chats).length+1;
      console.log(store.chats);
      return update(store, {
        chats: {
          $merge: {[id-1]: { id: id, nameId: action.name, age: action.age }},
        },
      });
    }
    default:
      return store;
  }
}
