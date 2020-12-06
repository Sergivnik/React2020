// Message.jsx
import React from "react";
import "./messageStyle.sass";

export function Message({ userMessage: { name, content } }) {
  return (
    <div
      className="messageDiv"
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
