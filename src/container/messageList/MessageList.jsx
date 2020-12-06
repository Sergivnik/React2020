import React from "react";
import { Message } from "../message/Message.jsx";
import "./messageListStyle.sass";

export function MessageList({ messagesList }) {
  return (
    <div className="messageListDiv">
      {messagesList.map((item, index) => (
        <Message userMessage={item} key={index} />
      ))}
    </div>
  );
}
