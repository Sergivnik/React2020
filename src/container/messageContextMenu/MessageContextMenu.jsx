// MessageContextMenu.jsx
import React from "react";
import { bindActionCreators } from "redux";
import connect from "react-redux/es/connect/connect";
import { changeMessage } from "../../actions/messageChange.js";

const mapStateToProps = ({ chatReducer }) => ({
  messages: chatReducer.messages,
});

const mapDispatchToProps = (dispatch) =>
  bindActionCreators({ changeMessage }, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(MessageContextMenu);

function MessageContextMenu({
  id,
  name,
  content,
  onDelMessage,
  onEdit,
  changeMessage,
}) {
  const handleClick = (event) => {
    let action;
    if (event.currentTarget.dataset.id == "btn-1") action = "qiote";
    if (event.currentTarget.dataset.id == "btn-3") action = "delete";
    changeMessage(id, action, content);
  };
  const handleClickEdit = () => {
    onEdit();
  };

  return (
    <div>
      {name == "Robot" ? (
        <button data-id="btn-1" onClick={handleClick}>
          Цитировать
        </button>
      ) : null}
      {name != "Robot" ? (
        <button data-id="btn-2" onClick={handleClickEdit}>
          Редактировать
        </button>
      ) : null}
      {name != "Robot" ? (
        <button data-id="btn-3" onClick={handleClick}>
          Удалить
        </button>
      ) : null}
    </div>
  );
}
