import { sendMessage } from "../actions/messageActions.js";

let timeOutId
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
      }, 500);
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
