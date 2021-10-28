import React, { useState, useEffect } from "react";
import { FetchMe } from "./components/FetchRequests";
import { BASE_URL } from "./components/FetchRequests";

const SeeMessages = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const SeeMessages = async () => {
      const response = await fetch(`${BASE_URL}/users/me`);
      const { data } = await response.json();
      setPosts(data.posts);
    };
    SeeMessages();
  }, []);

  return (
    <>
      <h1>Messages</h1>
      {posts.map((post) => (
        <div>
          <p>{post.messages}</p>
        </div>
      ))}
    </>
  );
};

export default SeeMessages;
