import React, { useState } from "react";
import { FetchEditPost } from "./FetchRequests";
export const BASE_URL =
  "https://strangers-things.herokuapp.com/api/2109-LSU-RM-WEB-FT";
export const TOKEN = window.localStorage.token;

const EditPost = ({ posts, setPosts, postId, setPostId }) => {
  const [title, setTitle] = useState([]);
  const [description, setDescription] = useState([]);
  const [price, setPrice] = useState([]);
  const [location, setLocation] = useState([]);
  const [willDeliver, setWillDeliver] = useState(true);

  const handleSubmit = async (event) => {
    event.preventDefault();
    const data = await FetchEditPost(title, description, price, willDeliver);
  };

  return (
    <>
      {posts.map((post) => (
        <form className="createPostForm" onSubmit={handleSubmit}>
          <label>
            Title:
            <input
              type="text"
              required
              name="title"
              defaultValue={data.title}
              value={title}
              onChange={(e) => setTitle(e.target.value)}
            />
          </label>
          <br />
          <label>
            Description:
            <input
              type="text"
              required
              name="description"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
            />
          </label>
          <br />
          <label>
            Price:
            <input
              type="text"
              required
              name="price"
              value={price}
              onChange={(e) => setPrice(e.target.value)}
            />
          </label>
          <br />
          <label>
            Will Deliver?
            <select id="willYouDeliver">
              <option value="true">Yes</option>
              <option value="false">No</option>
            </select>
          </label>
          <br />
          <input type="submit" value="Create new listing" />
        </form>
      ))}
    </>
  );
};
