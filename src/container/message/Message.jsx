import React from "react";
import "./messageStyle.sass";

export function Message(props) {
  return (
    <div className="messageDiv">
      <p className="messageP">
        <strong>{props.userMessage.name}: </strong>
        {props.userMessage.content}
      </p>
    </div>
  );
}
