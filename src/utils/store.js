import { createStore, applyMiddleware, compose } from "redux";
import initReducers from "./../reducers";
import thunk from "redux-thunk"

function initStore() {
  const innitialStore = {};

  return createStore(
    initReducers,
    innitialStore,
    compose(
      applyMiddleware(thunk),
      window.__REDUX_DEVTOOLS_EXTENSION__
        ? window.__REDUX_DEVTOOLS_EXTENSION__()
        : () => {}
    )
  );
}

export default initStore;
