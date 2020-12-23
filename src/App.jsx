// App.jsx
import React, { useCallback, useMemo, useState } from "react";
import { bindActionCreators } from "redux";
import connect from "react-redux/es/connect/connect";
import ChatList from "./container/chatList/chatList.jsx";
import MessageBlock from "./container/messageBlock/MessageBlock.jsx";
import AddUser from "./container/addUser/AddUser.jsx";
import { Header } from "./container/header/Header.jsx";
import { MessageList } from "./container/messageList/MessageList.jsx";
import Profile from "./container/profile/Profile.jsx";
import { sendMessage } from "./actions/messageActions.js";
import "./appStyle.sass";

const ROBOT = "Robot";

function App({ chatId, showProfile, chats, messages }) {
  const [showAddFormState, setShowAddFormState] = useState(false);
  const chatName = useMemo(() => {
    if (chatId) {
      return chats.find((item) => item.id == chatId).nameId;
    } else return "";
  }, [chatId]);

  const handleClickAdd = useCallback(() => {
    setShowAddFormState(!showAddFormState);
  }, [showAddFormState]);

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
