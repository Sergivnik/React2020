// App.jsx
import React, { useCallback, useMemo, useState, useEffect } from "react";
import { ChatList } from "./container/chatList/chatList.jsx";
import { MessageBlock } from "./container/messageBlock/MessageBlock.jsx";
import { AddUser } from "./container/addUser/AddUser.jsx";
import { Header } from "./container/header/Header.jsx";
import { MessageList } from "./container/messageList/MessageList.jsx";
import { Profile } from "./container/profile/Profile.jsx";
import { Login } from "./container/login/login.jsx";
import "./appStyle.sass";
import { useSelector, useDispatch } from "react-redux";
import { getData } from "./middlewares/getDataInitial.js";

export function App({ chatId, showProfile }) {
  const chats = useSelector(({ chatReducer }) => chatReducer.chats);
  const messages = useSelector(({ chatReducer }) => chatReducer.messages);
  const dispatch = useDispatch();
  const [showAddFormState, setShowAddFormState] = useState(false);
  const [sign, setSign] = useState(false);

  useEffect(() => {
    dispatch(getData());
  }, [dispatch]);

  const chatName = useMemo(() => {
    if (chatId) {
      return chats.find((item) => item.id == chatId).nameId;
    } else return "";
  }, [chatId]);

  const handleClickAdd = useCallback(() => {
    setShowAddFormState(!showAddFormState);
  }, [showAddFormState]);

  const handleGetSign = (s) => {
    setSign(s);
  };

  if (sign === false) return <Login getSign={handleGetSign} />;
  else
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
