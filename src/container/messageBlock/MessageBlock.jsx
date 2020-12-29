import React, { useEffect, useState } from "react";
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
    chatName =
      chats[Object.keys(chats).find((keyItem) => chats[keyItem].id == chatId)]
        .nameId;
  } else {
    chatName = "";
  }
  const getText = (event) => setText(event.currentTarget.value);

  const onSubmit = (event) => {
    event.preventDefault();
    setText("");
    
    dispatch(sendMessageThunk(null, text, chatName, chatId));
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
