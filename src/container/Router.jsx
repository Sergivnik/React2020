import React, { useState } from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import { RouteApp } from "../container/Router/RouteApp.js";
import { RouteProfile } from "../container/Router/RouteProfile.js";
import { Login } from "../container/login/login.jsx";

export function Router() {
  const [sign, setSign] = useState(false);

  const handleGetSign = (sing) => {
    setSign(sing);
  };
  if (sign === false) return <Login getSign={handleGetSign} />;
  else
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
        <Redirect to="/chat/1/" />
      </Switch>
    );
}
