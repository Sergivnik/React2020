import React from "react";
import { Message } from "../message/Message.jsx";
import "./messageListStyle.sass";

export function MessageList(props) {
  console.log(props.messagesList);
  return (
    <div className="messageListDiv">
      {props.messagesList.map((item, index) => 
          <Message userMessage={item} key={index} />
      )}
    </div>
  );
}
