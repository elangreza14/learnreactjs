import React from "react";
import "./App.css";
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";
import NewPlace from "./places/pages/NewPlace";
import Users from "./user/pages/Users";

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/user" exact>
          <Users />
        </Route>
        <Route path="/places" exact>
          <NewPlace />
        </Route>
        <Redirect to="/" />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
