import React from "react";
import { useParams, Redirect } from "react-router-dom";
import {App} from "../../App.jsx";
import { useSelector } from "react-redux";

export function RouteProfile() {
  const chats = useSelector(({ chatReducer }) => chatReducer.chats);
  const { chatId } = useParams();
  if (Object.values(chats).find((item) => item.id == chatId)) {
    return <App chatId={chatId} showProfile={true}></App>;
  } else return <Redirect to={"/chat/1/"} />;
}
