import React from "react";
import { Switch, Route } from "react-router-dom";

import Main from "./components/Main";
import SignIn from "./components/SignIn";
import Login from "./components/Login";
import Create from "./components/Create";

export const Routes = () => (
  <Switch>
    <Route exact path="/" component={Main} />
    <Route exact path="/signin" component={SignIn} />
    <Route exact path="/login" component={Login} />
    <Route exact path="/create" component={Create} />
  </Switch>
);
