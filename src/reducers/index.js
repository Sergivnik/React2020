import { combineReducers } from "redux";
import { createBrowserHistory } from "history";
import { connectRouter } from "connected-react-router";
import chatReducer from "./chatReducer.js";

export const history = createBrowserHistory();

export default (history) =>
  combineReducers({
    router: connectRouter(history),
    chatReducer,
  });
