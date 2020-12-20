import { createStore, applyMiddleware, compose } from "redux";
import { createBrowserHistory } from "history";
import { routerMiddleware } from "connected-react-router";
import initReducers from "./../reducers";
import thunk from "redux-thunk";

export const history = createBrowserHistory();

function initStore() {
  const innitialStore = {};

  return createStore(
    initReducers(history),
    innitialStore,
    compose(
      applyMiddleware(routerMiddleware(history), thunk),
      window.__REDUX_DEVTOOLS_EXTENSION__
        ? window.__REDUX_DEVTOOLS_EXTENSION__()
        : () => {}
    )
  );
}

export default initStore;
