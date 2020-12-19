import { SEND_MESSAGE } from "../actions/messageActions.js";

export default (store) => (next) => (action) => {
  switch (action.type) {
    case SEND_MESSAGE:
      if (action.sender != "Robot") {
        console.log("Надо бы ответить");
      }
  }
  return next(action);
};
