import React, { useState, useEffect } from "react";
import { SendMessage } from "./FetchRequests";

const BASE_URL =
  "https://strangers-things.herokuapp.com/api/2109-LSU-RM-WEB-FT";

const SendMessages = () => {
    const [posts, setPosts] = useState([]);
    const [postId, setPostId] = useState("")
    const [content, setContent] = useState("");
    const TOKEN = window.localStorage.getItem("token");

    const handleSubmit = async (event) => {
        event.preventDefault();
        const data = await SendMessage(content);
    }

    return (
        <>
      <h2>Messages</h2>
      {posts.map((post) => (
      <form className="sendmessage" onSubmit={handleSubmit} onClick={() => setPostId(post._id)}>
        <label>
          <input
            type="text"
            required
            name="subject"
            placeholder="Message subject"
          />
        </label>
        <br />
        <label>
          <input
            type="text"
            required
            name="body"
            placeholder="Message body"
          />
        </label>
        <br />
        <input type="submit" value="Send" />
      </form>
      ))}
    </>
  );
};

export default SendMessages;