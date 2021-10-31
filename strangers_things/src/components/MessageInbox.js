import React, { useState, useEffect } from "react";
import { FetchMessages } from "./FetchRequests";
const BASE_URL =
  "https://strangers-things.herokuapp.com/api/2109-LSU-RM-WEB-FT";


const SeeMessages = () => {
  const [posts, setPosts] = useState([])
  const [myMessages, setMyMessages] = useState([]);
  const TOKEN = window.localStorage.getItem("token");

  useEffect(() => {
    const SeeMessages = async () => {
      const response = await fetch(`${BASE_URL}/users/me`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          "Authorization": `Bearer ${TOKEN}`,
        }
      });
      const data = await response.json();
      console.log(data);
      setPosts(data.data.messages);
    };
    SeeMessages();
  }, []);

  return (
    <>
      <h1>Messages</h1>
      {posts.map((post) => (
        <p>{post.content}</p>
  ))}
    </>
  );
};

export default SeeMessages;

