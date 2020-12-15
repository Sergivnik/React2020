// App.jsx
import React, { useCallback, useEffect, useState } from "react";
import { MessageList } from "./container/messageList/MessageList.jsx";
import { MessageBlock } from "./container/messageBlock/MessageBlock.jsx";
import { Header } from "./container/header/Header.jsx";
import  ChatList  from "./container/chatList/chatList.jsx";
import { Profile } from "./container/profile/Profile.jsx";
import "./appStyle.sass";
import  AddUser  from "./container/addUser/AddUser.jsx";

const ROBOT = "Robot";
const messages = [
  { name: ROBOT, content: "Привет", id: 1, chatNumber: 1 },
  { name: ROBOT, content: "Как дела?", id: 2, chatNumber: 1 },
];
const listChat = [
  { id: 1, nameId: "Федор", age: 54 },
  { id: 2, nameId: "Петро", age: 82 },
  { id: 3, nameId: "Оксана", age: 18 },
  { id: 4, nameId: "Вальдемар", age: 27 },
];

export function App({ chatId, showProfile }) {
  if (!chatId) chatId = 1;

  const [messageState, setMessages] = useState(messages);
  const [qiote, setQiote] = useState("");
  const [listChatState, setlistChatState] = useState(listChat);
  const [showAddFormState, setShowAddFormState] = useState(false);
  let chatName =
    listChatState[listChatState.findIndex((item) => item.id == chatId)].nameId;

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
        let text = "";
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

  const handleClickAddCansel = useCallback(() => {
    setShowAddFormState(false);
  });

  const handleAddUser = useCallback((name, age) => {
    let user;
    setShowAddFormState(false);
    user = {
      id: listChatState[listChatState.length - 1].id + 1,
      nameId: name,
      age: age,
    };
    setlistChatState([...listChatState, user]);
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
        {showProfile ? (
          <Profile chatId={chatId} listChat={listChatState} />
        ) : null}
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
      {showAddFormState ? (
        <AddUser onCanselAddUser={handleClickAdd} />
      ) : null}
    </div>
  );
}
