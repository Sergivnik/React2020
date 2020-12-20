// index.js
import React from "react";
import ReactDOM from "react-dom";
import { Router } from "./container/Router.jsx";
import { ConnectedRouter } from "connected-react-router";
import { PersistGate } from "redux-persist/integration/react";
import { Provider } from "react-redux";
import initStore, { history } from "./utils/store.js";

const { store, persistor } = initStore();
//const store = createStore(chatReducer, applyMiddleware(thunk));

ReactDOM.render(
  <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>
      <ConnectedRouter history={history}>
        <Router />
      </ConnectedRouter>
    </PersistGate>
  </Provider>,
  document.getElementById("root")
);
