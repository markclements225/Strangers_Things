import React, { useEffect, useState } from "react";

// create post button
const CreatePostButton = () => {
  if (window.localStorage.token) {
    return <button>Create New Post</button>;
  }
};

//edit post button
const EditPostButton = () => {
  if (window.localStorage.token) {
    return <button>Edit Post</button>;
  }
};

//Delete Button

export default { CreatePostButton, EditPostButton };
