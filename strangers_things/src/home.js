import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  NavLink,
} from "react-router-dom";
import LoginForm from "./components/loginForm.js";

const Home = () => {
  return (
    <>
      <h1>Welcome to Stranger's Things!</h1>
      <h3>Site built by Mark Clements</h3>
      <h5>Select what you'd like to do from the menu above</h5>
    </>
  );
};

export default Home;
