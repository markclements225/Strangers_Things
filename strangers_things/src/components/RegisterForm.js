import React, { useEffect, useState } from "react";
import { FetchRegistration } from "./FetchRequests";

const RegisterForm = ({ setIsLoggedIn }) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const handleSubmit = async (event) => {
    if (password !== confirmPassword) {
      setErrorMessage("Passwords do not match");
      return errorMessage;
    }
    event.preventDefault();
    const data = await FetchRegistration(username, password);
    window.localStorage.setItem("token", data.data.token);
  };

  return (
    <>
      <h2>Register for Stranger's Things</h2>
      <form className="loginForm" onSubmit={handleSubmit}>
        <label>
          <input
            type="text"
            required
            minLength="4"
            name="name"
            placeholder="USERNAME"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </label>
        <br />
        <label>
          <input
            type="text"
            required
            minLength="8"
            name="password"
            placeholder="PASSWORD"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </label>
        <br />
        <label>
          <input
            type="text"
            required
            minLength="8"
            name="password"
            placeholder="CONFIRM PASSWORD"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
          />
        </label>
        <br />
        <input type="submit" value="Register" />
      </form>
    </>
  );
};

export default RegisterForm;
