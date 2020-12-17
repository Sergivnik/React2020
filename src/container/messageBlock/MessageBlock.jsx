import React, { useEffect, useState } from "react";
import { bindActionCreators } from "redux";
import connect from "react-redux/es/connect/connect";
import { changeMessage } from "../../actions/messageChange.js";
import { sendMessage } from "../../actions/messageActions.js";
import "./messageBlock.sass";

const mapStateToProps = ({ chatReducer }) => ({
  qiote: chatReducer.qiote,
  chats: chatReducer.chats,
  messages: chatReducer.messages,
});
const mapDispatchToProps = (dispatch) =>
  bindActionCreators({ changeMessage, sendMessage }, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(MessageBlock);

function MessageBlock({
  chatId,       // номер чата
  qiote,        // Цитата сообщения
  chats,        // Список чатов
  messages,     // Массив сообщений
  changeMessage,// Функция изменения сообщения
  sendMessage,  // Функция добавления сообщения в массив
}) {
  const [text, setText] = useState("");
  const chatName = chats.find((item) => item.id == chatId).nameId;

  const getText = (event) => setText(event.currentTarget.value);

  const onSubmit = (event) => {
    event.preventDefault();
    setText("");
    sendMessage(messages[messages.length - 1].id + 1, text, chatName, chatId);
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
