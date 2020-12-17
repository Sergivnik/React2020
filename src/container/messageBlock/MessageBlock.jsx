import React, { useEffect, useState } from "react";
import { bindActionCreators } from "redux";
import connect from "react-redux/es/connect/connect";
import { changeMessage } from "../../actions/messageChange.js";
import "./messageBlock.sass";

const mapStateToProps = ({ chatReducer }) => ({
  qiote: chatReducer.qiote,
});
const mapDispatchToProps = (dispatch) =>
  bindActionCreators({ changeMessage }, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(MessageBlock);

function MessageBlock({ qiote, getPush, chatName, changeMessage }) {
  const [text, setText] = useState("");

  const getText = (event) => setText(event.currentTarget.value);

  const onSubmit = (event) => {
    event.preventDefault();
    setText("");
    getPush({ name: chatName, content: text });
    changeMessage(null, "", "qiote");
  };

  const handleKeyUp = (event) => {
    if (event.keyCode == 13) {
      setText("");
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
