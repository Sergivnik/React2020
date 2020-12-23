import React, { useEffect, useMemo, useState } from "react";
import { changeMessage } from "../../actions/messageChange.js";
import "./messageBlock.sass";
import { sendMessageThunk } from "../../middlewares/messageMiddleware";
import { useSelector, useDispatch } from "react-redux";


export function MessageBlock({ chatId }) {
  const chats = useSelector(({ chatReducer }) => chatReducer.chats);
  const qiote = useSelector(({ chatReducer }) => chatReducer.qiote);
  const messages = useSelector(({ chatReducer }) => chatReducer.messages);
  const dispatch = useDispatch();

  const [text, setText] = useState("");
  let chatName;
  if (chatId) {
    chatName = chats.find((item) => item.id == chatId).nameId;
  } else {
    chatName = "";
  }
  const getText = (event) => setText(event.currentTarget.value);

  const onSubmit = (event) => {
    event.preventDefault();
    setText("");
    let id;
    if (messages.length) {
      id = messages[messages.length - 1].id + 1;
    } else id = 1;
    dispatch(sendMessageThunk(id, text, chatName, chatId));
    dispatch(changeMessage(null, "", "qiote"));
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
