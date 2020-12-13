// MessageContextMenu.jsx
import React from "react";

export function MessageContextMenu({
  id,
  name,
  content,
  onDelMessage,
  onEdit,
}) {
  const handleClick = (event) => {
    let action;
    if (event.currentTarget.dataset.id == "btn-1") action = "qiote";
    if (event.currentTarget.dataset.id == "btn-3") action = "delete";
    onDelMessage(id, action, content);
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
