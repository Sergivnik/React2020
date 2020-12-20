// Profile.jsx
import React from "react";
import { bindActionCreators } from "redux";
import connect from "react-redux/es/connect/connect";
import { Link } from "react-router-dom";
import { deleteChat } from "../../actions/chatDelete.js";
import "./profileStyle.sass";

function Profile({ chatId, listChat, chatName, deleteChat }) {
  const handleClick = () => deleteChat(chatId);
  return (
    <div className="profileDiv">
      <div className="profileHeader">
        <span className="profileP">
          <b>Профиль</b> {chatName}
        </span>
        <Link className="profileLink" to={`/chat/${chatId}`}>
          back
        </Link>
      </div>
      <div>
        <p>
          <b>Имя: </b>
          {chatName}
        </p>
        <p>
          <b>Возраст: </b>
          {listChat.find((item) => item.id == chatId).age}
        </p>
        <button onClick={handleClick}>Удалить</button>
      </div>
    </div>
  );
}
const mapStateToProps = ({ chatReducer }) => ({
  qiote: chatReducer.qiote,
  chats: chatReducer.chats,
  messages: chatReducer.messages,
});
const mapDispatchToProps = (dispatch) =>
  bindActionCreators({ deleteChat }, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Profile);
