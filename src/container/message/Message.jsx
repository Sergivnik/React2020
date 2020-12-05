// Message.jsx
import React from "react";
import "./messageStyle.sass";

export function Message({ userMessage: { name, content } }) {
  return (
    <div className="messageDiv">
      <p className="messageP">
        <strong>{name}: </strong>
        {content}
      </p>
    </div>
  );
}
