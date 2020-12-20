// index.js
import React from "react";
import ReactDOM from "react-dom";
import { createStore, applyMiddleware } from "redux";
import { Router } from "./container/Router.jsx";
import { ConnectedRouter } from "connected-react-router";
import { Provider } from "react-redux";
import initStore, { history } from "./utils/store.js";
import thunk from "redux-thunk";
import chatReducer from "./reducers/index";

const store = createStore(chatReducer, applyMiddleware(thunk));

ReactDOM.render(
  <Provider store={(initStore(), store)}>
    <ConnectedRouter history={history}>
      <Router />
    </ConnectedRouter>
  </Provider>,
  document.getElementById("root")
);
