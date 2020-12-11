// Header.jsx
import React from "react";
import "./headerStyle.sass";

export function Header({chatId}) {
  return (
    <div className="headerDiv">
      <span style={{ fontSize: "20px" }}>Чат {chatId}</span>
    </div>
  );
}
