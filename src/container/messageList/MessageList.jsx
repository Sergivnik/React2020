import React, { useEffect, useRef } from "react";
import { Message } from "../message/Message.jsx";
import "./messageListStyle.sass";

export function MessageList({ messagesList, onDelMessage, chatId }) {
  const myRef = useRef(null);
  useEffect(() => {
    myRef.current.scrollTop = myRef.current.scrollHeight;
  });
  return (
    <div ref={myRef} className="messageListDiv">
      {Object.keys(messagesList).map(
        (keyItem) =>
          messagesList[keyItem].chatNumber == chatId && (
            <Message
              name={messagesList[keyItem].name}
              content={messagesList[keyItem].content}
              id={keyItem}
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
