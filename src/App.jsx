// App.jsx
import React, { useCallback, useEffect, useState } from "react";
import { MessageList } from "./container/messageList/MessageList.jsx";
import { MessageBlock } from "./container/buttonPushMe/MessageBlock.jsx";

const ROBOT = "Robot";
const messages = [
  { name: ROBOT, content: "Привет" },
  { name: ROBOT, content: "Как дела?" },
];
let timerID;

export function App() {
  const [messageState, setMessages] = useState(messages);

  const handlePush = useCallback(
    (message) => setMessages([...messageState, message]),
    [messageState]
  );

  useEffect(() => {
    // Как-то странно перерендеривается, если отправить несколько сообщений подряд
    // за 3 сек. В итоге все нормально, но в процессе React наверное с ума сходит))
    // кстати и в итоге могут данные пропадать. Если неостанавливаясь вводить
    // 1 enter 2 enter 3 enter 4 enter 5 enter и т.д.
    clearTimeout(timerID);
    timerID = setTimeout(() => {
      const lastMessage = messageState[messageState.length - 1];
      if (lastMessage.name != ROBOT) {
        setMessages([
          ...messageState,
          {
            name: ROBOT,
            content: `Hello ${lastMessage.name}, I'm Robot`,
          },
        ]);
      }
    }, 3000);
  }, [messageState]);

  return (
    <div>
      <MessageList messagesList={messageState} />
      <MessageBlock getPush={handlePush} />
    </div>
  );
}
