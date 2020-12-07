// App.jsx
import React, { useCallback, useEffect, useState } from "react";
import { MessageList } from "./container/messageList/MessageList.jsx";
import { MessageBlock } from "./container/buttonPushMe/MessageBlock.jsx";
import { Header } from "./container/header/Header.jsx";
import { ChatList } from "./container/chatList/chatList.jsx";
import "./appStyle.sass";

const ROBOT = "Robot";
const messages = [
  { name: ROBOT, content: "Привет" },
  { name: ROBOT, content: "Как дела?" },
];
let timerID;

export function App() {
  const [messageState, setMessages] = useState(messages);
  const [unanswered, setUnanswered] = useState(0);
  const [lastName, setLastName] = useState("");

  const handlePush = useCallback(
    (message) => {
      console.log("handlePush", messageState);
      setMessages([...messageState, message]);
    },
    [messageState]
  );

  const pushFromRobot = useCallback(() => {
    handlePush({
      name: ROBOT,
      content: `Hello ${lastName}, I'm Robot`,
    });
  }, [handlePush, lastName]);

  useEffect(() => {
    const lastMessage = messageState[messageState.length - 1];
    {
      timerID = setTimeout(() => {
        if (lastMessage.name != ROBOT) {
          console.log("setTimeout", messageState);
          setLastName(lastMessage.name);
          setUnanswered((unOld) => {
            return unOld + 1;
          });
        }
      }, 3000);
    }
  }, [messageState, handlePush]);

  useEffect(() => {
    if (unanswered) {
      pushFromRobot();
      setUnanswered((unOld) => unOld - 1);
    }
  }, [unanswered, pushFromRobot]);

  return (
    <div className="layer">
      <Header />
      <ChatList />
      <div className="messageListBlock">
        <MessageList messagesList={messageState} getPush={handlePush} />
        <MessageBlock getPush={handlePush} />
      </div>
    </div>
  );
}
