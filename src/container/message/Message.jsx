// Message.jsx
import React, { useState } from "react";
import { MessageContextMenu } from "../messageContextMenu/MessageContextMenu.jsx";
import "./messageStyle.sass";
import { ROBOT } from "../../App.jsx";

export function Message({ userMessage: { name, content, id }, onDelMessage }) {
  let [showMenu, setShowMenu] = useState(false);
  const handleClick = () => {
    setShowMenu(!showMenu);
  };
  return (
    <div
      className="messageDiv"
      onClick={handleClick}
      style={{
        alignSelf: name === ROBOT ? "flex-start" : "flex-end",
      }}
    >
      <p className="messageP">
        <strong>{name}: </strong>
        {content}
      </p>
      {showMenu ? (
        <MessageContextMenu
          id={id}
          name={name}
          content={content}
          onDelMessage={onDelMessage}
        />
      ) : null}
    </div>
  );
}
