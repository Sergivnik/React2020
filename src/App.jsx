// App.jsx
import React, { useCallback, useEffect, useState } from "react";
import { MessageList } from "./container/messageList/MessageList.jsx";
import { MessageBlock } from "./container/buttonPushMe/MessageBlock.jsx";
import { Header } from "./container/header/Header.jsx";
import { ChatList } from "./container/chatList/chatList.jsx";
import { useDebouncedCallback } from 'use-debounce';
import "./appStyle.sass";

const ROBOT = "Robot";
const messages = [
  { name: ROBOT, content: "Привет" },
  { name: ROBOT, content: "Как дела?" },
];

export function App() {
  const [messageState, setMessages] = useState(messages);
  const handlePush = useCallback(
    (message, skipReply) => {
      console.log("handlePush", messageState);
      setMessages([...messageState, message]);

      if (!skipReply) {
          debouncedRobotReply.callback();
      }
    },
    [messageState]
  );

    const debouncedRobotReply = useDebouncedCallback(
        () => {
            const lastMessage = messageState[messageState.length - 1];

            if (lastMessage.name === ROBOT) {
                return;
            }

            handlePush({
                name: ROBOT,
                content: `Hello ${lastMessage.name}, I'm Robot`,
            }, true);
        },
        3000
    );

  return (
    <div className="layer">
      <Header />
      <ChatList />
      <MessageList messagesList={messageState} />
      <MessageBlock getPush={handlePush} />
    </div>
  );
}
