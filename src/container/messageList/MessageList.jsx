import React, { Component, useEffect } from "react";
import { Message } from "../message/Message.jsx";
import "./messageListStyle.sass";

export function MessageList({ messagesList }) {
  const myRef = React.createRef();
  useEffect(() => {
    myRef.current.scrollTop = myRef.current.scrollHeight;
  });
  return (
    <div ref={myRef} className="messageListDiv">
      {messagesList.map((item, index) => (
        <Message userMessage={item} key={index} />
      ))}
    </div>
  );
}
