import React, { useEffect, useState } from "react";
import { FetchLogin } from "./FetchRequests";
import { useHistory } from "react-router";
import RegisterForm from "./RegisterForm";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  NavLink,
} from "react-router-dom";

const LoginForm = ({ setIsLoggedIn }) => {
  const history = useHistory();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (event) => {
    event.preventDefault();
    const data = await FetchLogin(username, password);
    window.localStorage.setItem("token", data.data.token);
    setIsLoggedIn(true);
    history.push("/posts");
  };
  return (
    <>
      <h2>Login to Stranger's Things</h2>
      <form className="loginForm" onSubmit={handleSubmit}>
        <label>
          <input
            type="text"
            name="name"
            placeholder="ENTER USERNAME"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </label>
        <br />
        <label>
          <input
            type="text"
            name="password"
            placeholder="ENTER PASSWORD"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </label>
        <br />
        <input type="submit" value="Login" />
      </form>
      <h3>
        Not a member yet? <NavLink to="/register">Register today.</NavLink>
      </h3>
    </>
  );
};

export default LoginForm;
