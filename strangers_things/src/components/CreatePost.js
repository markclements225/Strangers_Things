import React, { useEffect, useState } from "react";
import { FetchCreatePost } from "./FetchRequests";
import { useHistory } from "react-router";
const TOKEN = window.localStorage.getItem("token");
// import EditPost from "./EditPost";

const CreatePost = () => {
  const history = useHistory();
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState("");
  const [willDeliver, setWillDeliver] = useState(false);

  const handleSubmit = async (event) => {
    event.preventDefault();
      const data = await FetchCreatePost(title, description, price);
    history.push("/posts");
  };

  useEffect(() => {
    console.log(willDeliver);
  }, [willDeliver]);

  return (
    <>
      <h2>List new item for sale</h2>
      <form className="createPostForm" onSubmit={handleSubmit}>
        <label>
          Title:
          <input
            type="text"
            required
            name="title"
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
        </label>
        <input type="checkbox" checked={willDeliver} name="delivery" onChange={() => setWillDeliver(!willDeliver)}></input>
        <br />
        <input type="submit" value="Create new listing" />
      </form>
    </>
  );
};

export default CreatePost;

{/* <select id="willYouDeliver" onChange={(e) => setWillDeliver(e.target.value)}>
<option value="true">Yes</option>
<option value="false">No</option>
</select> */}