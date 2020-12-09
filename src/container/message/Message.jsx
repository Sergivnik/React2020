// Message.jsx
import React, { useState } from "react";
import "./messageStyle.sass";

export function Message({ userMessage: { name, content, id }, onDelMessage }) {
  const handleClick = () => {
    return onDelMessage(id);
  };
  return (
    <div
      className="messageDiv"
      onClick={handleClick}
      style={{
        alignSelf: name === "Robot" ? "flex-start" : "flex-end",
      }}
    >
      <p className="messageP">
        <strong>{name}: </strong>
        {content}
      </p>
    </div>
  );
}
