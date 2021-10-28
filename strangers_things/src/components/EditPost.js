import React, { useState } from "react";
import { FetchEditPost } from "./FetchRequests";
const BASE_URL =
  "https://strangers-things.herokuapp.com/api/2109-LSU-RM-WEB-FT";
const TOKEN = window.localStorage.getItem("token");

const EditPost = ({ posts, setPosts, postId, setPostId }) => {
  const [title, setTitle] = useState([]);
  const [description, setDescription] = useState([]);
  const [price, setPrice] = useState([]);
  const [willDeliver, setWillDeliver] = useState(true);

  const handleSubmit = async (event) => {
    event.preventDefault();
    const response = await fetch(`${BASE_URL}/posts/${postId}`, {
      method: "PATCH",
      headers: {
        "Content-type": "application/json",
        "Authorization": `Bearer ${TOKEN}`,
      },
      body: JSON.stringify({
        post: {
          title,
          description,
          price,
          willDeliver,
        },
      }),
    });
    const data = await response.json();
    console.log(data);
    if(data && data.title) {
      const newPosts = posts.map(post => {
        if(post.id === postId) {
          return data;
        } else {
          return post;
        }
      });
      setPosts(newPosts);
      setTitle("");
      setDescription("");
      setPrice("");
      setWillDeliver("");
      setPostId(null);
    }
  };

  return (
    <>
    <h2>Edit your post</h2>
        <form className="createPostForm" onSubmit={handleSubmit}>
          <label>
            Title:
            <input
              type="text"
              required
              name="title"
              defaultValue={title}
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
          <input type="submit" value="Edit post" />
        </form>
    </>
  );
};

export default EditPost;
