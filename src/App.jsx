// App.jsx
import React, { useCallback, useEffect, useState } from "react";
import { MessageList } from "./container/messageList/MessageList.jsx";
import { MessageBlock } from "./container/buttonPushMe/MessageBlock.jsx";

let timerID;
const ROBOT = "Robot";
const messages = [
  { name: ROBOT, content: "Привет" },
  { name: ROBOT, content: "Как дела?" },
];

export function App() {
  const [messageState, setMessages] = useState(messages);
  const [updateRobot, setUpdateRobot] = useState(null);
  const toggleUpdate = () => setUpdateRobot(!updateRobot);

  const handlePush = useCallback(
    (message) => setMessages([...messageState, message]),
    [messageState]
  );

  useEffect(() => {
    if (messageState[messageState.length - 1].name != ROBOT) {
      setMessages([
        ...messageState,
        {
          name: ROBOT,
          content: `Hello, ${ROBOT} I'm robot`,
        },
      ]);
    }
    setTimeout(toggleUpdate, 3000);
  }, [updateRobot]);

  return (
    <div>
      <MessageList messagesList={messageState} />
      <MessageBlock getPush={handlePush} />
    </div>
  );
}
