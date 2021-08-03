import React from "react";
import "./login.scss";
import { Link } from "react-router-dom";

function Login() {
  return (
    <div className="login">
      <Link to="/settings" className="set-link">
        Settings
      </Link>
      <form className="form-login">
        <input
          placeholder="username"
          name="username"
          className="input-login"
        ></input>
        <input
          placeholder="password"
          name="password"
          className="input-login"
        ></input>
        <button className="login-button">Log out</button>
      </form>
    </div>
  );
}

export default Login;
