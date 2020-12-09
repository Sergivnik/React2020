import React, { useEffect, useState } from "react";
import "./messageBlock.sass";

export function MessageBlock({ qioteEnter, getPush }) {
  const [text, setText] = useState(qioteEnter);
  console.log(text);

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

  useEffect(() => {
    setText(qioteEnter);
  }, [qioteEnter]);

  return (
    <form className="messageBlock">
      <input
        className="textfield"
        onChange={getText}
        onKeyUp={handleKeyUp}
        type="text"
        value={text}
      />
      <button className="buttonPushMe" type="submit" onClick={onSubmit}>
        Отправить
      </button>
    </form>
  );
}
