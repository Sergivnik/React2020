// AddUser.jsx
import React, { useState } from "react";
import "./addUserDivStyle.sass";

export function AddUser({ onAddUser }) {
  const [name, setName] = useState("");
  const [age, setAge] = useState("");

  const getName = (event) => setName(event.currentTarget.value);
  const getAge = (event) => setAge(event.currentTarget.value);

  const onSubmit = (event) => {
    event.preventDefault();
    onAddUser(name, age);
  };

  return (
    <form className="addUserDiv" onSubmit={onSubmit}>
      <h2> Добавить пользователя</h2>
      <label htmlFor="name">
        Имя
        <input id={"name"} value={name} onChange={getName} required />
      </label>

      <label htmlFor="age">
        Возраст
        <input id={"age"} value={age} onChange={getAge} required />
      </label>

      <button type={"submit"}>Добавить</button>
    </form>
  );
}
