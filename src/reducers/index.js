import { combineReducers } from "redux";
import { connectRouter } from "connected-react-router";
import {history} from "../utils/store.js"
import chatReducer from "./chatReducer.js";


export default (history) =>
  combineReducers({
    router: connectRouter(history),
    chatReducer,
  });
