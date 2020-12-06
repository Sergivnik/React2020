import React, { useCallback, useState } from "react";
import "./messageBlock.sass";

export function MessageBlock({ getPush }) {
  const [text, setText] = useState("");
  const getText = (event) => setText(event.currentTarget.value, [text]);

  const onPushMe = () => {
    setText("", [text]);
    getPush({ name: "Федор", content: text });
  };

  const handleKeyUp = (event) => {
    if (event.keyCode == 13) {
      setText("", [text]);
      getPush({ name: "Федор", content: text });
    }
  };

  return (
    <div className="messageBlock">
      <input
        className="textfield"
        onChange={getText}
        onKeyUp={handleKeyUp}
        type="text"
        value={text}
      />
      <button className="buttonPushMe" onClick={onPushMe}>
        Отправить
      </button>
    </div>
  );
}
