import React, { useEffect, useState } from "react";
import "./messageBlock.sass";

export function MessageBlock({ qioteEnter, getPush, resetQiote }) {
  const [text, setText] = useState("");

  const getText = (event) => setText(event.currentTarget.value);

  const onSubmit = (event) => {
    event.preventDefault();
    setText("");
    getPush({ name: "Федор", content: text });
    resetQiote();
  };

  const handleKeyUp = (event) => {
    if (event.keyCode == 13) {
      setText("");
      resetQiote();
    }
  };

  useEffect(() => {
    setText(qioteEnter);
  }, [qioteEnter]);

  return (
    <form className="messageBlock" onSubmit={onSubmit}>
      <input
        className="textfield"
        onChange={getText}
        onKeyUp={handleKeyUp}
        type="text"
        value={text}
      />
      <button className="buttonPushMe" type="submit">
        Отправить
      </button>
    </form>
  );
}
