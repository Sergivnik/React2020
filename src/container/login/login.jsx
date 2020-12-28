// Login.jsx
import React, { useState } from "react";
import "./loginStyle.sass";
import { signin } from "../../services/firebase.js";

export function Login({ getSign }) {
  const [text, setText] = useState("");
  const [password, setPassword] = useState("");

  const handleKeyUp = (event) => {
    if (event.keyCode == 13) {
      signin(text, password)
        .then(() => {
          getSign(true);
        })
        .catch(() => {
          alert("пароль неверен");
          getSign(false);
        });
    }
  };
  const getText = (event) => setText(event.currentTarget.value);
  const getPassword = (event) => setPassword(event.currentTarget.value);

  return (
    <div className="passwordBlock">
      <label className="labelBox">
        Логин sergivnik@mail.ru
        <input type="email" onChange={getText} />
      </label>
      <label className="labelBox">
        Пароль 123456
        <input type="password" onChange={getPassword} onKeyUp={handleKeyUp} />
      </label>
    </div>
  );
}
