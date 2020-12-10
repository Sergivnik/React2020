// App.jsx
import React, { useCallback, useEffect, useState } from "react";
import { MessageList } from "./container/messageList/MessageList.jsx";
import { MessageBlock } from "./container/buttonPushMe/MessageBlock.jsx";
import { Header } from "./container/header/Header.jsx";
import { ChatList } from "./container/chatList/chatList.jsx";
import "./appStyle.sass";

export const ROBOT = "Robot";
const messages = [
  { name: ROBOT, content: "Привет", id: 1 },
  { name: ROBOT, content: "Как дела?", id: 2 },
];


export function App() {
  const [messageState, setMessages] = useState(messages);
  const [Qiote, setQiote] = useState("");

  const handlePush = useCallback(
    (message) => {
      message.id = messageState[messageState.length - 1].id + 1;
      setMessages([...messageState, message]);
    },
    [messageState]
  );

  // Пятое задание не сделал т.к. у меня такого бага не возникло (не иммитировать же)
  // Сделал удаление, редактирование и цитирование

  const handleChangeMessage = useCallback(
    (id, action, content) => {
      // И вот здесь нужен useCallback? console.log срабатывает одинаково. Как с useCallback так и без.
      console.log("Ахтунг");
      if (action == "delete") {
        let arr = [...messageState];
        //Почему нужен дополнительный массив. Почему нельзя как-нибудь так
        // setMessages(
        //   [...messageState].splice(
        //     [...messageState].findIndex((item) => item.id === id)
        //   ,1)
        // );
        // и он ведь не существует за пределами if ?
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
        // ну тут я конечно поленился )))
        text = prompt(`Редактирлвать сообщение ${content}`, content + text);
        arr[arr.findIndex((item) => item.id === id)].content = text;
        setMessages(arr);
      }
    },
    [messageState]
  );

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
      <Header />
      <ChatList />
      <div className="messageListBlock">
        <MessageList
          messagesList={messageState}
          onDelMessage={handleChangeMessage}
        />
        <MessageBlock qioteEnter={Qiote} getPush={handlePush} />
      </div>
    </div>
  );
}
