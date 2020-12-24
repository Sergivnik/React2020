// Header.jsx
import React from "react";
import "./headerStyle.sass";
import { useSelector } from "react-redux";

export function Header({ chatName }) {
  const request = useSelector(({ chatReducer }) => chatReducer.request);
  let chatStatus;
  if (request.status == "IDLE") chatStatus = "";
  if (request.status == "LOADING") chatStatus = "Загрузка началась";
  if (request.status == "SUCCESS") chatStatus = "Загрузка завершена";
  if (request.status == "FAILURE") chatStatus = "Загрузка не удачна";
  return (
    <div className="headerDiv">
      <span className="headerSpan">
        Чат {chatName} {chatStatus}
      </span>
    </div>
  );
}
