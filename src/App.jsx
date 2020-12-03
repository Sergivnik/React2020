import React, { Component } from "react";
import { MessageList } from "./container/messageList/MessageList.jsx";

export function App() {
  let messages = [
    { name: "Федор", content: "Привет" },
    { name: "Федор", content: "Как дела?" },
  ];
  return <MessageList messagesList={messages} />;
}
