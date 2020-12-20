import { sendMessage } from "../actions/messageActions.js";
import { fireChat } from "../actions/fire.js";

let timeOutId;
export const sendMessageThunk = (messageId, text, sender, chatId) => {
  return (dispatch) => {
    dispatch(sendMessage(messageId, text, sender, chatId));
    if (sender != "Robot") {
      clearTimeout(timeOutId);
      timeOutId = setTimeout(() => {
        dispatch(
          sendMessage(
            messageId + 1,
            "Не приставай ко мне, я робот!",
            "Robot",
            chatId
          )
        );
        dispatch(fireChat(true, chatId));
      }, 500);
      setTimeout(() => {
        dispatch(fireChat(false, chatId));
      }, 5000);
    }
  };
};
//   switch (action.type) {
//     case SEND_MESSAGE:
//       if (action.sender != "Robot") {
//         setTimeout(() => {
//           store.dispatch(
//             sendMessage(
//               Object.keys(store.getState().chatReducer.messages).length + 1,
//               "Не приставай ко мне, я робот!",
//               "Robot",
//               action.chatId
//             )
//           );
//         }, 1000);
//       }
//   }
//   return next(action);
// };
