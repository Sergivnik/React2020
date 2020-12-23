// MessageContextMenu.jsx
import React from "react";
import { changeMessage } from "../../actions/messageChange.js";
import { useDispatch } from "react-redux";

export function MessageContextMenu({ id, name, content, onEdit }) {
  const dispatch = useDispatch();
  const handleClick = (event) => {
    let action;
    if (event.currentTarget.dataset.id == "btn-1") action = "qiote";
    if (event.currentTarget.dataset.id == "btn-3") action = "delete";
    dispatch(changeMessage(id, content, action));
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
