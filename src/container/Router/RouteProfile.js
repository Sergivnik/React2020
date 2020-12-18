import React from "react";
import { useParams, Redirect } from "react-router-dom";
import connect from "react-redux/es/connect/connect";
import App from "../../App.jsx";

const mapStateToProps = ({ chatReducer }) => ({
  chats: chatReducer.chats,
});

export default connect(mapStateToProps)(RouteProfile);

function RouteProfile({ chats }) {
  const { chatId } = useParams();
  if (chats.find((item) => item.id == chatId)) {
    return <App chatId={chatId} showProfile={true}></App>;
  } else return <Redirect to={"/chat/1/"} />;
}
