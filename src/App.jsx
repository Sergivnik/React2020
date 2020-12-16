// App.jsx
import React, { useCallback, useEffect, useState } from "react";
import { bindActionCreators } from "redux";
import connect from "react-redux/es/connect/connect";
import { MessageList } from "./container/messageList/MessageList.jsx";
import { MessageBlock } from "./container/messageBlock/MessageBlock.jsx";
import { Header } from "./container/header/Header.jsx";
import ChatList from "./container/chatList/chatList.jsx";
import { Profile } from "./container/profile/Profile.jsx";
import "./appStyle.sass";
import AddUser from "./container/addUser/AddUser.jsx";
import { sendMessage } from "./actions/messageActions.js";

const ROBOT = "Robot";
// const messages = [
//   { name: ROBOT, content: "Привет", id: 1, chatNumber: 1 },
//   { name: ROBOT, content: "Как дела?", id: 2, chatNumber: 1 },
// ];

const mapStateToProps = ({ chatReducer }) => ({
  chats: chatReducer.chats,
  messages: chatReducer.messages,
});

const mapDispatchToProps = (dispatch) =>
  bindActionCreators({ sendMessage }, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(App);

function App({ chatId, showProfile, chats, messages, sendMessage }) {
  if (!chatId) chatId = 1;

  const [messageState, setMessages] = useState(messages);
  const [qiote, setQiote] = useState("");
  const [showAddFormState, setShowAddFormState] = useState(false);
  let chatName = chats[chats.findIndex((item) => item.id == chatId)].nameId;

  const handlePush = useCallback(
    (message) => {
      message.id = messageState[messageState.length - 1].id + 1;
      message.chatNumber = chatId;
      setMessages([...messageState, message]);
    },
    [messageState, chatId]
  );

  const handleQiote = () => {
    setQiote("");
  };

  const handleChangeMessage = useCallback(
    (id, action, content) => {
      if (action == "delete") {
        let arr = [...messageState];
        arr.splice(
          arr.findIndex((item) => item.id === id),
          1
        );
        setMessages(arr);
      }
      if (action == "qiote") {
        setQiote(`Цитата: ${content}`);
      }
      if (action == "edit") {
        let arr = [...messageState];
        arr[arr.findIndex((item) => item.id === id)].content = content;
        setMessages(arr);
      }
    },
    [messageState, qiote]
  );

  const handleClickAdd = useCallback(() => {
    setShowAddFormState(!showAddFormState);
  });

  useEffect(() => {
    const lastMessage = messageState[messageState.length - 1];
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
  }, [messageState]);

  return (
    <div className="layer">
      <Header chatName={chatName} />
      <ChatList onClickAdd={handleClickAdd} />
      <div className="messageListBlock">
        {showProfile ? <Profile chatId={chatId} listChat={chats} /> : null}
        <MessageList
          messagesList={messageState}
          onDelMessage={handleChangeMessage}
          chatId={chatId}
        ></MessageList>
        <MessageBlock
          qioteEnter={qiote}
          getPush={handlePush}
          resetQiote={handleQiote}
          chatName={chatName}
        />
      </div>
      {showAddFormState ? <AddUser onCanselAddUser={handleClickAdd} /> : null}
    </div>
  );
}
