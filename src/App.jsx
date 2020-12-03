import React, { useState } from "react";
import { MessageList } from "./container/messageList/MessageList.jsx";
import { ButtonPushMe } from "./container/buttonPushMe/BattonPushMe.jsx";

export function App() {
  let messages = [
    { name: "Федор", content: "Привет" },
    { name: "Федор", content: "Как дела?" },
  ];
  const [messageState, setMessages] = useState(messages);
  console.log("messageState", messageState);
  function handlePush(message) {
    setMessages([...messageState, message]);
    //return messages;
  }
  return (
    <div>
      <ButtonPushMe getPush={handlePush} />
      <MessageList messagesList={messageState} />
    </div>
  );
}
