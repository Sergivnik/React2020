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
  const [check, setCheck] = useState(true);
  const handlePush = useCallback(
    (message) => setMessages([...messageState, message]),
    [messageState]
  );

  useEffect(() => {
    // Как-то странно перерендеривается, если отправить несколько сообщений подряд
    // за 3 сек. В итоге все нормально, но в процессе React наверное с ума сходит))
    // кстати и в итоге могут данные пропадать. Если неостанавливаясь вводить
    // 1 enter 2 enter 3 enter 4 enter 5 enter и т.д.
    // Уже не пропадают т.к. убрал лишние useCallback в MessageBlock

    clearTimeout(timerID);
    // clearTimeout вроде решает проблему, но может есть другие способы
    const lastMessage = messageState[messageState.length - 1];
    if (check && lastMessage.name != ROBOT) {
      //setCheck(false);
      timerID = setTimeout(() => {
        setMessages([
          ...messageState,
          {
            name: ROBOT,
            content: `Hello ${lastMessage.name}, I'm Robot`,
          },
        ]);
        //setCheck(true);
      }, 3000);
    }
  }, [messageState]);

  return (
    <div>
      <MessageList messagesList={messageState} />
      <MessageBlock getPush={handlePush} />
    </div>
  );
}
