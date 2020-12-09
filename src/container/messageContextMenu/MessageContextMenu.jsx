// MessageContextMenu.jsx
import React from "react";

export function MessageContextMenu({ id, name, content, onDelMessage }) {
  const handleClick = (event) => {
    let action;
    if (event.currentTarget.dataset.id == "btn-1") action = "qiote";
    if (event.currentTarget.dataset.id == "btn-2") action = "edit";
    if (event.currentTarget.dataset.id == "btn-3") action = "delete";
    return onDelMessage(id, action, content);
  };

  return (
    <div>
      {name == "Robot" ? (
        <button data-id="btn-1" onClick={handleClick}>
          Цитировать
        </button>
      ) : null}
      {name != "Robot" ? (
        <button data-id="btn-2" onClick={handleClick}>
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
