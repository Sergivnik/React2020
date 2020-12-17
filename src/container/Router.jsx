import React from "react";
import { Switch, Route, useParams, Redirect } from "react-router-dom";
import App from "../App.jsx";

function RouteApp() {
  const { chatId } = useParams();
  return <App chatId={chatId}></App>;
}

function RouteProfile() {
  const { chatId } = useParams();
  debugger;
  return <App chatId={chatId} showProfile={true}></App>;
}

export function Router() {
  return (
    <Switch>
      <Route exact path="/" component={App} />
      <Route exact path="/chat/:chatId/">
        <RouteApp />
      </Route>
      <Route exact path="/profile/:chatId/">
        <RouteProfile />
      </Route>
      <Redirect to={"/chat/1/"} />
    </Switch>
  );
}
