import React from "react";
import { Switch, Route, useParams } from "react-router-dom";
import App from "../App.jsx";

function RouteApp() {
  const { chatId } = useParams();
  return <App chatId={chatId}></App>;
}

export function Router() {
  return (
    <Switch>
      <Route exact path="/" component={App} />
      <Route
        exact
        path="/chat/:chatId/"
        render={(obj) => <App chatId={Number(obj.match.params.chatId)} />}
      />
      <Route
        exact
        path="/profile/:chatId/"
        render={(obj) => (
          <App chatId={Number(obj.match.params.chatId)} showProfile={true} />
        )}
      />
    </Switch>
  );
}
