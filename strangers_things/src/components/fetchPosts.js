import React, { useState, useEffect } from "react";
import {
  BrowserRouter as Router,
  NavLink,
} from "react-router-dom";
import EditPost from "./EditPost";
import SearchBar from "./SearchBar";
import SendMessages from "./SendMessages";
const BASE_URL =
  "https://strangers-things.herokuapp.com/api/2109-LSU-RM-WEB-FT";

  const FetchPosts = () => {
  const [posts, setPosts] = useState([]);
  const [postId, setPostId] = useState(null);
  const TOKEN = window.localStorage.getItem("token");

  useEffect(() => {
    const FetchPosts = async () => {
      const response = await fetch(
        "https://strangers-things.herokuapp.com/api/2109-LSU-RM-WEB-FT/posts",
        {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
            "Authorization": `Bearer ${TOKEN}`,
          },
        }
      );
      const { data } = await response.json();
      // console.log(data);
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
}

  return (
    <>
      <h1 className="posts">Posts</h1>
      <SearchBar />
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
          ) : <NavLink to="/sendmessage"> <button>Message seller</button> </NavLink>}
          <hr />
        </div>
      ))}
    </>
  );
};

export default FetchPosts;
