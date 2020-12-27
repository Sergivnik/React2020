import React, { useEffect, useRef } from "react";
import { Message } from "../message/Message.jsx";
import "./messageListStyle.sass";

export function MessageList({ messagesList, onDelMessage, chatId }) {
  const myRef = useRef(null);
  useEffect(() => {
    myRef.current.scrollTop = myRef.current.scrollHeight;
  });
  console.log(messagesList);
  return (
    <div ref={myRef} className="messageListDiv">
      {Object.keys(messagesList).forEach(
        (keyItem) =>
          messagesList[keyItem].chatNumber == chatId && (
            <Message
              userMessage={messagesList[keyItem]}
              key={keyItem}
              onDelMessage={onDelMessage}
            />
          )
      )}
      {/* {messagesList.map((item, index) =>
        item.chatNumber == chatId ? (
          <Message userMessage={item} key={index} onDelMessage={onDelMessage} />
        ) : null
      )} */}
    </div>
  );
}
