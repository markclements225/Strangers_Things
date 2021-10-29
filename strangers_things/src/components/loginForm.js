import React, { useState } from "react";
import { FetchLogin } from "./FetchRequests";
import { useHistory } from "react-router";
import {
  BrowserRouter as Router,
  NavLink,
} from "react-router-dom";

const LoginForm = ({ setIsLoggedIn }) => {
  const history = useHistory();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState(null);

  const handleSubmit = async (event) => {
    event.preventDefault();
    const data = await FetchLogin(username, password);
    if (data.success === false) {
      setErrorMessage(data.error.message);
    } else {
    window.localStorage.setItem("token", data.data.token);
    setIsLoggedIn(true);
    console.log(data);
    history.push("/posts");
    }
  };
  return (
    <>
      <h2>Login to Stranger's Things</h2>
      {errorMessage ? <p>{errorMessage}</p> : 
      null}
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
