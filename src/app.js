import React from "react";
import "./app.scss";
import ToDo from "./components/todo/todo.js";
import Header from "./components/header/Header.js";

function App(props) {
  return (
    <>
      <Header />
      <div className="container">
        <ToDo />
      </div>
    </>
  );
}

export default App;
