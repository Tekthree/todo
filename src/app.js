import React from "react";
import "./app.scss";
import ToDo from "./components/todo/todo.js";
import Header from "./components/header/Header.js";
import Settings from "./components/settings/Settings.js";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

function App(props) {
  return (
    <Router>
      <Header />
      <Switch>
        <Route exact path="/">
          <div className="container">
            <ToDo />
          </div>
        </Route>
        <Route path="/settings">
          <div className="container">
            <Settings />
          </div>
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
