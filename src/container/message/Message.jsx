// Message.jsx
import React, { useState, useRef, useEffect } from "react";
import { bindActionCreators } from "redux";
import connect from "react-redux/es/connect/connect";
import { changeMessage } from "../../actions/messageChange.js";
import MessageContextMenu from "../messageContextMenu/MessageContextMenu.jsx";
import "./messageStyle.sass";

const mapStateToProps = ({ chatReducer }) => ({
  messages: chatReducer.messages,
});

const mapDispatchToProps = (dispatch) =>
  bindActionCreators({ changeMessage }, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Message);

function Message({
  userMessage: { name, content, id },
  changeMessage,
  onDelMessage,
}) {
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
      changeMessage(id, text, "edit");
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
