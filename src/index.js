// index.js
import React from "react";
import ReactDOM from "react-dom";
import { App } from "./App.jsx";
import { Router } from "./container/Router.jsx";
import { BrowserRouter } from "react-router-dom";

ReactDOM.render(
  <BrowserRouter>
    <Router />
  </BrowserRouter>,
  document.getElementById("root")
);
