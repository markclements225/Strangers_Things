import { useState } from "react";
const BASE_URL =
  "https://strangers-things.herokuapp.com/api/2109-LSU-RM-WEB-FT";
const TOKEN = window.localStorage.getItem("token");

// function to REGISTER on site
export async function FetchRegistration(username, password) {
  const response = await fetch(`${BASE_URL}/users/register`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      user: {
        username,
        password,
      },
    }),
  });
  const data = response.json();
  return data;
}

// function to LOGIN
export async function FetchLogin(username, password) {
  const response = await fetch(`${BASE_URL}/users/login`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      user: {
        username,
        password,
      },
    }),
  });
  const data = response.json();
  return data;
}

export async function FetchNewPosts(title, description, price, willDeliver) {
  const response = await fetch(`${BASE_URL}/posts`, {
    method: "GET",
    headers: {
      "Authorization": `Bearer ${TOKEN}`,
    }
  })
}

// function to CREATE new post
export async function FetchCreatePost(title, description, price, willDeliver) {
  const response = await fetch(`${BASE_URL}/posts`, {
    method: "POST",
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
}

export async function SendMessage(content) {
  const [postId, setPostId] = useState(null);
  const response = await fetch(`${BASE_URL}/posts/${postId}/messages`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "Authorization": `Bearer ${TOKEN}`,
    },
    body: JSON.stringify ({
      message: {
        content,
      },
    }),
  });
  const data = response.json();
  return data;
}

export async function FetchMessages() {
  try {
    const response = await fetch(`${ BASE_URL }/users/me`, {
      headers: {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${TOKEN}`,
      },
    })
   const data = await response.json();
   console.log(data)
   const myMessages = data.data.messages;
   console.log(myMessages, "<--received msgs")
   return myMessages;
  } catch(err) {
    console.error(err);
  };
}


// function to fetch ME
// export async function FetchMe() {
//   const response = await fetch(`${BASE_URL}/users/me`, {
//     headers: {
//       "Content-Type": "application/json",
//       Authorization: `Bearer ${TOKEN}`,
//     },
//   });
// }
