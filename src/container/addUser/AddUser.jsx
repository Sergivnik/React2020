// AddUser.jsx
import React, { useState } from "react";
import { bindActionCreators } from "redux";
import connect from "react-redux/es/connect/connect";
import { addChat } from "../../actions/chatActions.js";
import "./addUserDivStyle.sass";

const mapStateToProps = ({ chatReducer }) => ({
  chats: chatReducer.chats,
});

const mapDispatchToProps = (dispatch) =>
  bindActionCreators({ addChat }, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(AddUser);

function AddUser(props) {
  const { onAddUser, onCanselAddUser, addChat } = props;
  const [name, setName] = useState("");
  const [age, setAge] = useState("");

  const getName = (event) => setName(event.currentTarget.value);
  const getAge = (event) => setAge(event.currentTarget.value);

  const onSubmit = (event) => {
    event.preventDefault();
    addChat(name, age);
    onCanselAddUser();
  };

  const onCansel = () => {
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
            id={"name"}
            value={name}
            onChange={getName}
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
      <button className="addUserbutton" onClick={onCansel}>
        Отмена
      </button>
    </div>
  );
}
