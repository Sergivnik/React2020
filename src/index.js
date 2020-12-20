// index.js
import React from "react";
import ReactDOM from "react-dom";
import { createStore, applyMiddleware } from "redux";
import { Router } from "./container/Router.jsx";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import initStore from "./utils/store.js";
import thunk from "redux-thunk";
import chatReducer from "./reducers/index";

const store = createStore(chatReducer, applyMiddleware(thunk));

ReactDOM.render(
  <Provider store={initStore(), store}>
    <BrowserRouter>
      <Router />
    </BrowserRouter>
  </Provider>,
  document.getElementById("root")
);
