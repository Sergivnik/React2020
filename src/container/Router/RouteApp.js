import React from "react";
import { useParams, Redirect } from "react-router-dom";
import { App } from "../../App.jsx";
import { useSelector } from "react-redux";

export function RouteApp() {
  const chats = useSelector(({ chatReducer }) => chatReducer.chats);
  const { chatId } = useParams();
  if (Object.values(chats).length > 0) {
    // костыль на случай удаления всех чатов
    if (Object.values(chats).find((item) => item.id == chatId)) {
      return <App chatId={chatId}></App>;
    } else {
      const anyId = Object.values(chats)[0].id;
      return <Redirect to={`/chat/${anyId}/`} />;
    }
  } else return <App chatId={0}></App>;
}
