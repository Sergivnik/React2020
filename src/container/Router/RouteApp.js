import React from "react";
import { useParams, Redirect } from "react-router-dom";
import connect from "react-redux/es/connect/connect";
import App from "../../App.jsx";

const mapStateToProps = ({ chatReducer }) => ({
  chats: chatReducer.chats,
});

export default connect(mapStateToProps)(RouteApp);

function RouteApp({ chats }) {
  const { chatId } = useParams();
  if (chats.length > 0) {
    if (chats.find((item) => item.id == chatId)) {
      return <App chatId={chatId}></App>;
    } else {
      const anyId = chats[0].id;
      return <App chatId={anyId}></App>;
    }
  } else return <App chatId={0}></App>;
}
