// Message.jsx
import React from "react";
import "./messageStyle.sass";
import { ROBOT } from "../../App.jsx";

export function Message({ userMessage: { name, content } }) {
  return (
    <div
      className="messageDiv"
      style={{
        alignSelf: name === ROBOT ? "flex-start" : "flex-end",
      }}
    >
      <p className="messageP">
        <strong>{name}: </strong>
        {content}
      </p>
    </div>
  );
}
