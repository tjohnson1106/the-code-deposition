import React from "react";
import { Switch, Route } from "react-router-dom";

import Main from "./components/Main";
import SignIn from "./components/SignIn";

export const Routes = () => (
  <Switch>
    <Route exact path="/" component={Main} />
    <Route exact path="/signin" component={SignIn} />
  </Switch>
);
