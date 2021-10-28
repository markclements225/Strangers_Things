import React, { useState } from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import "./index.css";
import App from "./app";
import RegisterForm from "./components/registerForm.js";
import LoginForm from "./components/loginForm.js";

ReactDOM.render(
  <React.StrictMode>
    <h1>Hello World!</h1>
    {/* <LoginForm /> */}
    <RegisterForm />
    {/* <App /> */}
  </React.StrictMode>,
  document.getElementById("root")
);
