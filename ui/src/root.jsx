import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Signin from "./pages/auth/sign-in";
const Root = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/sign-in" component={Signin} exact />
      </Switch>
    </BrowserRouter>
  );
};

export default Root;
