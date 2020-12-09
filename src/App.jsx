// App.jsx
import React, { useCallback, useEffect, useState } from "react";
import { MessageList } from "./container/messageList/MessageList.jsx";
import { MessageBlock } from "./container/buttonPushMe/MessageBlock.jsx";
import { Header } from "./container/header/Header.jsx";
import { ChatList } from "./container/chatList/chatList.jsx";
import "./appStyle.sass";

const ROBOT = "Robot";
const messages = [
  { name: ROBOT, content: "Привет", id: 1 },
  { name: ROBOT, content: "Как дела?", id: 2 },
];

export function App() {
  const [messageState, setMessages] = useState(messages);

  const handlePush = useCallback(
    (message) => {
      message.id = messageState[messageState.length - 1].id + 1;
      console.log("handlePush", message);
      setMessages([...messageState, message]);
    },
    [messageState]
  );

  const handleDelMessage = (id) => {
    let arr = [...messageState];
    arr.splice(id-1, 1);
    setMessages(arr);
  };

  useEffect(() => {
    const lastMessage = messageState[messageState.length - 1];
    let timerID;
    {
      timerID = setTimeout(() => {
        if (lastMessage.name != ROBOT) {
          console.log("setTimeout", messageState);
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
      <Header />
      <ChatList />
      <div className="messageListBlock">
        <MessageList
          messagesList={messageState}
          onDelMessage={handleDelMessage}
        />
        <MessageBlock getPush={handlePush} />
      </div>
    </div>
  );
}
