// Header.jsx
import React from "react";
import "./headerStyle.sass";

export function Header({ chatName }) {
  return (
    <div className="headerDiv">
      <span className="headerSpan">Чат {chatName}</span>
    </div>
  );
}
