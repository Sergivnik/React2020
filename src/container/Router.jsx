import React from "react";
import { Switch, Route, useParams, Redirect } from "react-router-dom";
import { bindActionCreators } from "redux";
import connect from "react-redux/es/connect/connect";
import App from "../App.jsx";

const mapStateToProps = ({ chatReducer }) => ({
  chats: chatReducer.chats,
});

export default connect(mapStateToProps)(Router);

function RouteApp({ chats }) {
  const { chatId } = useParams();
  if (chats.find((item) => item.id == chatId)) {
    return <App chatId={chatId}></App>;
  } else {
    return <App chatId={1}></App>;
  }
}

function RouteProfile() {
  const { chatId } = useParams();
  return <App chatId={chatId} showProfile={true}></App>;
}

function Router({ chats }) {
  return (
    <Switch>
      <Route exact path="/">
        <RouteApp chats={chats} />
      </Route>
      <Route exact path="/chat/:chatId/">
        <RouteApp chats={chats} />
      </Route>
      <Route exact path="/profile/:chatId/">
        <RouteProfile />
      </Route>
      <Redirect to={"/chat/1/"} />
    </Switch>
  );
}
