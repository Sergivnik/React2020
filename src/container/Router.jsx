import React from "react";
import { Switch, Route } from "react-router-dom";
import { App } from "../App.jsx";

export function Router() {
  return (
    <Switch>
      <Route exact path="/" component={App} />
      <Route
        exact
        path="/chat/:chatId/"
        render={(obj) => <App chatId={Number(obj.match.params.chatId)} />}
      />
    </Switch>
  );
}
