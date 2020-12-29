// Message.jsx
import React, { useState, useRef, useEffect } from "react";
import { changeMessageThunk } from "../../middlewares/messageMiddleware.js";
import { MessageContextMenu } from "../messageContextMenu/MessageContextMenu.jsx";
import "./messageStyle.sass";
import { useDispatch } from "react-redux";

export function Message({ name, content, id, onDelMessage }) {
  const dispatch = useDispatch();
  const myRef = useRef(null);
  const [showMenu, setShowMenu] = useState(false);
  const [showEdit, setShowEdit] = useState(false);
  const [text, setText] = useState(content);
  const handleClick = () => {
    if (!showEdit) setShowMenu(!showMenu);
  };
  const handleOnEdit = () => {
    setShowEdit(!showEdit);
  };
  const getContent = (event) => setText(event.currentTarget.value);
  const handleKeyUp = (event) => {
    if (event.keyCode == 13) {
      dispatch(changeMessageThunk(id, text, "edit"));
      setShowEdit(false);
    }
  };
  useEffect(() => {
    if (showEdit) myRef.current.focus();
  }, [showEdit]);
  return (
    <div
      className="messageDiv"
      onClick={handleClick}
      style={{
        alignSelf: name === "Robot" ? "flex-start" : "flex-end",
      }}
    >
      <p className="messageP">
        <strong>{name}: </strong>
        {content}
      </p>
      {showMenu ? (
        <MessageContextMenu
          id={id}
          name={name}
          content={content}
          onDelMessage={onDelMessage}
          onEdit={handleOnEdit}
        />
      ) : null}
      {showEdit ? (
        <div>
          <input
            ref={myRef}
            value={text}
            type="text"
            onChange={getContent}
            onKeyUp={handleKeyUp}
          />
          <button onClick={handleOnEdit}>Отмена</button>
        </div>
      ) : null}
    </div>
  );
}
