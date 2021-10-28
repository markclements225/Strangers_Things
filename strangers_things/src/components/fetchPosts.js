import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  NavLink,
} from "react-router-dom";
// import CreatePostButton from "./Buttons.js";

const FetchPosts = () => {
  const [posts, setPosts] = useState([]);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    const FetchPosts = async () => {
      const response = await fetch(
        "https://strangers-things.herokuapp.com/api/2109-LSU-RM-WEB-FT/posts"
      );
      const { data } = await response.json();
      console.log(data);
      setPosts(data.posts);
    };
    FetchPosts();
  }, []);

  const CreatePostButton = () => {
    if (window.localStorage.token) {
      return (
        <NavLink to="/createpost">
          <button>Create New Post</button>
        </NavLink>
      );
    }
  };

  const EditPostButton = () => {
    if (window.localStorage.token) {
      return (
        <NavLink to="/createpost">
          <button>Edit Post</button>
        </NavLink>
      );
    }
  };

  const DeletePostButton = () => {
    if (window.localStorage.token) {
      return (
        <NavLink to="/createpost">
          <button>Delete Post</button>
        </NavLink>
      );
    }
  };

  return (
    <>
      <h1 className="posts">Posts</h1>
      {CreatePostButton()}
      {EditPostButton()}
      {DeletePostButton()}
      {posts.map((post) => (
        <div>
          <h3 key={post._id}>{post.title}</h3>
          <p>{post.description}</p>
          <p>
            <strong>Price: {post.price}</strong>
          </p>
          <hr />
        </div>
      ))}
    </>
  );
};

export default FetchPosts;
