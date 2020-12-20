// App.jsx
import React, { useCallback, useEffect, useMemo, useState } from "react";
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

function App({ chatId, showProfile, chats, messages, sendMessage }) {
  const [showAddFormState, setShowAddFormState] = useState(false);
  const chatName = useMemo(
    () => chats.find((item) => item.id == chatId).nameId
  );

  const handleClickAdd = useCallback(() => {
    setShowAddFormState(!showAddFormState);
  });

  // useEffect(() => {
  //   const lastMessage = messages[messages.length - 1];
  //   let timerID;
  //   {
  //     timerID = setTimeout(() => {
  //       if (lastMessage.name != ROBOT) {
  //         sendMessage(
  //           messages[messages.length - 1].id + 1,
  //           `Hello ${lastMessage.name}, I'm Robot`,
  //           ROBOT,
  //           chatId
  //         );
  //       }
  //     }, 500);
  //     return () => clearTimeout(timerID);
  //   }
  // }, [messages, chatId]);

  return (
    <div className="layer">
      <Header chatName={chatName} />
      <ChatList onClickAdd={handleClickAdd} />
      <div className="messageListBlock">
        {showProfile && (
          <Profile chatId={chatId} listChat={chats} chatName={chatName} />
        )}
        <MessageList messagesList={messages} chatId={chatId}></MessageList>
        <MessageBlock chatId={chatId} />
      </div>
      {showAddFormState && <AddUser onCanselAddUser={handleClickAdd} />}
    </div>
  );
}

const mapStateToProps = ({ chatReducer }) => ({
  chats: chatReducer.chats,
  messages: chatReducer.messages,
});

const mapDispatchToProps = (dispatch) =>
  bindActionCreators({ sendMessage }, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(App);
