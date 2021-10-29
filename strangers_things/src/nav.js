import React from "react";
import {
  BrowserRouter as Router,
  NavLink,
} from "react-router-dom";

const Nav = ({ isLoggedIn, setIsLoggedIn }) => {
  const handleClick = () => {
    localStorage.clear();
    setIsLoggedIn(false);
  };

  return (
    <nav id="navbar">
      <NavLink exact to="/" activeClassName="active">
        Home
      </NavLink>
      <NavLink to="/posts" activeClassName="active">
        Posts
      </NavLink>
      {isLoggedIn ? (
        <>
          <NavLink to="/messages">Messages</NavLink>
          <NavLink to="/login" onClick={handleClick}>
            Logout
          </NavLink>
        </>
      ) : (
        <NavLink to="/login" activeClassName="active">
          Login/Register
        </NavLink>
      )}
    </nav>
  );
};

export default Nav;
