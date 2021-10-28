import React, { useState, useEffect } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  NavLink,
  useHistory,
} from "react-router-dom";
import LoginForm from "./components/loginForm.js";
import Nav from "./nav.js";
import Home from "./home.js";
import FetchPosts from "./components/fetchPosts.js";
import RegisterForm from "./components/RegisterForm.js";
import CreatePost from "./components/CreatePost.js";
import SeeMessages from "./Messages.js";
import EditPost from "./components/EditPost.js";

//isLoggedIn, setIsLoggedin --> pass isLoggedIN to nav componenet and only
//render certain links if isLoggedin = true

const App = (props) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [posts, setPosts] = useState([]);
  const [postId, setPostId] = useState(null);

  useEffect(() => {
    if (window.localStorage.token) {
      setIsLoggedIn(true);
    }
  }, []);

  return (
    <div id="container">
      <Router>
        <Nav isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn} />
        <div id="main-section">
          <Switch>
            <Route exact path="/createpost">
              <CreatePost />
            </Route>
            <Route exact path="/">
              <Home />
            </Route>
            <Route path="/posts">
              <FetchPosts />
            </Route>
            <Route path="/messages">
              <SeeMessages setIsLoggedIn={setIsLoggedIn} />
            </Route>
            <Route path="/edit">
              <EditPost
                posts={posts}
                setPosts={setPosts}
                postId={postId}
                setPostId={setPostId}
              />
            </Route>
            <Route path="/login">
              <LoginForm setIsLoggedIn={setIsLoggedIn} />
            </Route>
            <Route path="/register">
              <RegisterForm setIsLoggedIn={setIsLoggedIn} />
            </Route>
          </Switch>
        </div>
      </Router>
    </div>
  );
};

export default App;
