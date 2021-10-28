import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  NavLink,
} from "react-router-dom";
import { FetchNewPosts } from "./FetchRequests";
import EditPost from "./EditPost";
const BASE_URL =
  "https://strangers-things.herokuapp.com/api/2109-LSU-RM-WEB-FT";
const TOKEN = window.localStorage.getItem("token");

const FetchPosts = () => {
  const [posts, setPosts] = useState([]);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [postId, setPostId] = useState(null);

  useEffect(() => {
    const FetchPosts = async () => {
      const response = await fetch(
        "https://strangers-things.herokuapp.com/api/2109-LSU-RM-WEB-FT/posts",
        {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${TOKEN}`,
          },
        }
      );
      const { data } = await response.json();
      console.log(data);
      setPosts(data.posts);
    };
    FetchPosts();
  }, []);

  const handleDelete = async (postId) => {
  const response = await fetch(`${BASE_URL}/posts/${postId}`, {
    method: "DELETE",
    headers: {
      "content-type": "application/json",
      "Authorization": `Bearer ${TOKEN}`
    }
  })
  const data = await response.json();
  if(data) {
    const newPosts = posts.filter(post => post._id !== postId);
    setPosts(newPosts)
  }
  }

  return (
    <>
      <h1 className="posts">Posts</h1>
      {TOKEN ? <NavLink to="/createpost">
        <button>Create New Post</button>
        </NavLink> : null}
      {posts.map((post) => (
        <div>
          <h3 key={post._id}>{post.title}</h3>
          <p>{post.description}</p>
          <p>
            <strong>Price: {post.price}</strong>
          </p>
          {post.isAuthor ? (
            <>
              <NavLink to="/edit">
                <button onClick={() => setPostId(post._id)}>Edit Post</button>
              </NavLink>
              <button onClick={() => handleDelete(post._id)}>Delete Post</button>
            </>
          ) : null}
          <hr />
        </div>
      ))}
    </>
  );
};

export default FetchPosts;
