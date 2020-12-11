// Header.jsx
import React from "react";
import "./headerStyle.sass";

export function Header({ chatName }) {
  return (
    <div className="headerDiv">
      <span style={{ fontSize: "20px" }}>Чат {chatName}</span>
    </div>
  );
}
