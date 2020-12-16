import React, { useEffect, useRef } from "react";
import Message from "../message/Message.jsx";
import "./messageListStyle.sass";

export function MessageList({ messagesList, onDelMessage, chatId }) {
  const myRef = useRef(null);
  useEffect(() => {
    myRef.current.scrollTop = myRef.current.scrollHeight;
  });
  return (
    <div ref={myRef} className="messageListDiv">
      {messagesList.map((item, index) =>
        item.chatNumber == chatId ? (
          <Message userMessage={item} key={index} onDelMessage={onDelMessage} />
        ) : null
      )}
    </div>
  );
}
