import update from "react-addons-update";
import { ADD_CHAT } from "../actions/chatActions";
import { SEND_MESSAGE } from "../actions/messageActions";
import { CHANGE_MESSAGE } from "../actions/messageChange.js";
import { FIRE_CHAT } from "../actions/fire.js";
import { DELETE_CHAT } from "../actions/chatDelete.js";
import {
  GET_DATA_SUCCESS,
  GET_DATA_REQUEST,
  GET_DATA_FAILURE,
} from "../actions/getDataInitial.js";

const initialStore = {
  chats: [],
  messages: [],
  qiote: "",
  fire: { fire: false, id: null },
  request: {
    status: "IDLE",
    error: null,
  },
};

export default function chatReducer(store = initialStore, action) {
  switch (action.type) {
    case ADD_CHAT: {
      const id = store.chats.length + 1;
      return update(store, {
        chats: {
          $merge: {
            [id - 1]: { id: id, nameId: action.name, age: action.age },
          },
        },
      });
    }
    case SEND_MESSAGE: {
      const id = store.messages.length + 1;
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
    case DELETE_CHAT: {
      let arrChat, arrMessage;
      arrMessage = store.messages.filter(
        (item) => item.chatNumber != action.id
      );
      arrChat = store.chats.filter((item) => item.id != action.id);
      return { ...store, messages: [...arrMessage], chats: [...arrChat] };
    }
    case GET_DATA_SUCCESS: {
      console.log(action.dataServer.chats);
      return {
        ...store,
        chats: action.dataServer.chats,
        messages: action.dataServer.messages,
        request: {
          status: "SUCCESS",
          error: null,
        },
      };
    }
    case GET_DATA_FAILURE: {
      return {
        ...store,
        request: {
          status: "FAILURE",
          error: true,
        },
      };
    }
    case GET_DATA_REQUEST: {
      return {
        ...store,
        request: {
          status: "LOADING",
          error: null,
        },
      };
    }
    default:
      return store;
  }
}
