// index.js
import React from "react";
import ReactDOM from "react-dom";
import Router from "./container/Router.jsx";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import initStore from "./utils/store.js";

ReactDOM.render(
  <Provider store={initStore()}>
    <BrowserRouter>
      <Router />
    </BrowserRouter>
  </Provider>,
  document.getElementById("root")
);
