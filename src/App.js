import React from "react";
import "./App.css";
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";
import NewPlace from "./places/pages/NewPlace";
import NewUser from "./user/pages/NewUser";

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact>
          <NewUser />
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
