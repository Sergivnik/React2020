import React from "react";
import "./messageStyle.sass";
export function Message(props) {
  console.log(props.userMessage);
  return (
    <div className="messageDiv">
      <p>
        <strong>{props.userMessage.name}: </strong>
        {props.userMessage.content}
      </p>
    </div>
  );
}
