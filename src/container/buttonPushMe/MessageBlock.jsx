import React, { useCallback, useState } from "react";
import "./messageBlock.sass";

export function MessageBlock({ getPush }) {
  const [text, setText] = useState("");
  // Вот что-то у меня сомнения по поводу необходимости использовать здесь useCallback
  const getText = useCallback(
    (event) => {
      setText(event.currentTarget.value, [text]);
    },
    [text]
  );
  // ну и здесь тоже, вроде дочерним элементам не передается
  const onPushMe = useCallback(() => {
    setText("", [text]);
    getPush({ name: "Федор", content: text });
  }, [text]);

  const handleKeyUp = useCallback(
    (event) => {
      if (event.keyCode == 13) {
        setText("", [text]);
        getPush({ name: "Федор", content: text });
      }
    },
    [text]
  );

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
