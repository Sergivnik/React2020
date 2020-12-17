// App.jsx
import React, { useCallback, useEffect, useState } from "react";
import { bindActionCreators } from "redux";
import connect from "react-redux/es/connect/connect";
import ChatList from "./container/chatList/chatList.jsx";
import MessageBlock from "./container/messageBlock/MessageBlock.jsx";
import AddUser from "./container/addUser/AddUser.jsx";
import { Header } from "./container/header/Header.jsx";
import { MessageList } from "./container/messageList/MessageList.jsx";
import { Profile } from "./container/profile/Profile.jsx";
import { sendMessage } from "./actions/messageActions.js";
import "./appStyle.sass";

const ROBOT = "Robot";
const mapStateToProps = ({ chatReducer }) => ({
  chats: chatReducer.chats,
  messages: chatReducer.messages,
});

const mapDispatchToProps = (dispatch) =>
  bindActionCreators({ sendMessage }, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(App);

function App({ chatId, showProfile, chats, messages, sendMessage }) {
  //Да, понимаю, что плохо, но не придумал ничего лучшего у меня с Router, что-то не ладится
  //Он у меня вверху расположен и я не пойму как в нем отслеживать маршрут
  if (!chats.find((item) => item.id == chatId)) chatId = 1;

  const [showAddFormState, setShowAddFormState] = useState(false);
  let chatName = chats.find((item) => item.id == chatId).nameId;

  const handlePush = useCallback(
    (message) => {
      message.id = messages[messages.length - 1].id + 1;
      message.chatNumber = chatId;
      sendMessage(
        message.id,
        message.content,
        message.name,
        message.chatNumber
      );
    },
    [messages, chatId]
  );

  const handleClickAdd = useCallback(() => {
    setShowAddFormState(!showAddFormState);
  });

  useEffect(() => {
    const lastMessage = messages[messages.length - 1];
    let timerID;
    {
      timerID = setTimeout(() => {
        if (lastMessage.name != ROBOT) {
          handlePush({
            name: ROBOT,
            content: `Hello ${lastMessage.name}, I'm Robot`,
          });
        }
      }, 500);
      return () => clearTimeout(timerID);
    }
  }, [messages]);

  return (
    <div className="layer">
      <Header chatName={chatName} />
      <ChatList onClickAdd={handleClickAdd} />
      <div className="messageListBlock">
        {showProfile && (
          <Profile chatId={chatId} listChat={chats} chatName={chatName} />
        )}
        <MessageList messagesList={messages} chatId={chatId}></MessageList>
        <MessageBlock getPush={handlePush} chatName={chatName} />
      </div>
      {showAddFormState && <AddUser onCanselAddUser={handleClickAdd} />}
    </div>
  );
}
