import React, { useEffect, useState } from "react";
import connect from "react-redux/es/connect/connect";
import "./messageBlock.sass";

const mapStateToProps = ({ chatReducer }) => ({
  qiote: chatReducer.qiote,
});

export default connect(mapStateToProps)(MessageBlock);

function MessageBlock({ qiote, getPush, resetQiote, chatName }) {
  const [text, setText] = useState("");

  const getText = (event) => setText(event.currentTarget.value);

  const onSubmit = (event) => {
    event.preventDefault();
    setText("");
    getPush({ name: chatName, content: text });
    resetQiote();
  };

  const handleKeyUp = (event) => {
    if (event.keyCode == 13) {
      setText("");
      resetQiote();
    }
  };

  useEffect(() => {
    setText(qiote);
  }, [qiote]);

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
