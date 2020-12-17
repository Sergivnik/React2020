// Profile.jsx
import React from "react";
import { Link } from "react-router-dom";
import "./profileStyle.sass";

export function Profile({ chatId, listChat, chatName }) {
  return (
    <div className="profileDiv">
      <div className="profileHeader">
        <span className="profileP"><b>Профиль</b> {chatName}</span>
        <Link className="profileLink" to={`/chat/${chatId}`}>back</Link>
      </div>
      <div>
        <p>
          <b>Имя:  </b>
          {chatName}
        </p>
        <p>
          <b>Возраст:  </b>
          {listChat.find((item) => item.id == chatId).age}
        </p>
      </div>
    </div>
  );
}
