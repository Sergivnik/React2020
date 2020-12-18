import React from "react";
import { Switch, Route, useParams, Redirect } from "react-router-dom";
import RouteApp from "../container/Router/RouteApp.js";
import RouteProfile from "../container/Router/RouteProfile.js";

export function Router() {
  return (
    <Switch>
      <Route exact path="/">
        <RouteApp />
      </Route>
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
