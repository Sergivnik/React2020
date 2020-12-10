import React, { useCallback, useState } from "react";
import "./messageBlock.sass";

export function MessageBlock({ getPush }) {
  const [text, setText] = useState("");
  const getText = (event) => setText(event.currentTarget.value);

  const onSubmit = (event) => {
    event.preventDefault();
    setText("");
    getPush({ name: "Федор", content: text });
  };

  const handleKeyUp = (event) => {
    if (event.keyCode == 13) {
      setText("");
    }
  };

  return (
    <form className="messageBlock">
      <input
        className="textfield"
        onChange={getText}
        onKeyUp={handleKeyUp}
        type="text"
        value={text}
      />
      <button className="buttonPushMe" onClick={onSubmit}>
        Отправить
      </button>
    </form>
  );
}
