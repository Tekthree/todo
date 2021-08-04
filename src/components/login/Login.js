import React, { useState, useContext } from "react";
import { When } from "react-if";
import { LoginContext } from "../../context/auth.js";
import "./login.scss";
import { Link } from "react-router-dom";

function Login() {
  const contextType = useContext(LoginContext);

  console.log(contextType)
  const [username, setUserName] = useState("");
  const [password, setPassword] = useState("");

  function handleChange(e){
    setUserName({ [e.target.name]: e.target.value });
  };

  function handleSubmit(e){
    e.preventDefault();
    contextType.login(username, password);
  };

  return (
    <div className="login">
      <When condition={contextType.loggedIn}>
        <button className="logout-button">Log out</button>
      </When>
      <When>
        <Link to="/settings" className="set-link">
          Settings
        </Link>
        <form className="form-login" onSubmit={handleSubmit}>
          <input
            placeholder="username"
            name="username"
            className="input-login"
            onChange={handleChange}
          ></input>
          <input
            placeholder="password"
            name="password"
            className="input-login"
            onChange={handleChange}
          ></input>
          <button className="login-button">Log out</button>
        </form>
      </When>
    </div>
  );
}

export default Login;
