import React, { Component } from "react";
import { Message } from "../message/Message.jsx";

export function MessageList(props) {
  console.log(props.messagesList);
  return (
    <div>
      {props.messagesList.map((item, index) => {
        <Message userMessage={item} key={index} />;
      })}
    </div>
  );
}
