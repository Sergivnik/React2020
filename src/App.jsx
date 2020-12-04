// App.jsx
import React, { useCallback, useState } from "react";
import { MessageList } from "./container/messageList/MessageList.jsx";
import { ButtonPushMe } from "./container/buttonPushMe/BattonPushMe.jsx";

const messages = [
  { name: "Федор", content: "Привет" },
  { name: "Федор", content: "Как дела?" },
];

export function App() {
  const [messageState, setMessages] = useState(messages);

  const handlePush = useCallback(
    (message) => setMessages([...messageState, message]),
    [messageState]
  );

  return (
    <div>
      <ButtonPushMe getPush={handlePush} />
      <MessageList messagesList={messageState} />
    </div>
  );
}
