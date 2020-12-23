// AddUser.jsx
import React, { useState } from "react";
import { addChat } from "../../actions/chatActions.js";
import "./addUserDivStyle.sass";
import { useDispatch } from "react-redux";

export function AddUser({ onCanselAddUser}) {
  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  const dispatch = useDispatch();

  const updateName = (event) => setName(event.currentTarget.value);
  const getAge = (event) => setAge(event.currentTarget.value);

  const onSubmit = (event) => {
    event.preventDefault();
    dispatch(addChat(name, age));
    onCanselAddUser();
  };

  return (
    <div className="addUserDiv">
      <form className="addUserForm" onSubmit={onSubmit}>
        <h2 className="addUserh2"> Добавить пользователя</h2>
        <label className="addUserlabel" htmlFor="name">
          Имя
          <input
            className="addUserinput"
            id="name"
            value={name}
            onChange={updateName}
            required
          />
        </label>

        <label className="addUserlabel" htmlFor="age">
          Возраст
          <input
            className="addUserinput"
            id={"age"}
            value={age}
            onChange={getAge}
            required
          />
        </label>

        <button className="addUserbutton" type={"submit"}>
          Добавить
        </button>
      </form>
      <button className="addUserbutton" onClick={onCanselAddUser}>
        Отмена
      </button>
    </div>
  );
}
