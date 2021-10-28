import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom";
export const BASE_URL =
  "https://strangers-things.herokuapp.com/api/2109-LSU-RM-WEB-FT";
export const TOKEN = window.localStorage.getItem("token");

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

// function to EDIT post
// export async function FetchEditPost(title, description, price, willDeliver) {
//   const response = await fetch(`${BASE_URL}/posts/`, {
//     method: "PATCH",
//     headers: {
//       "Content-type": "application/json",
//       Authorization: `Bearer ${TOKEN}`,
//     },
//     body: JSON.stringify({
//       post: {
//         title,
//         description,
//         price,
//         willDeliver,
//       },
//     }),
//   });
// }

// function to DELETE post
// export async function FetchDeletePost() {
//   const response = await fetch(`${BASE_URL}/posts${POST_ID}`, {
//     method: "DELETE",
//     headers: {
//       "Content-type": "application/json",
//       Authorization: `Bearer ${TOKEN}`,
//     },
//   });
// }

// function to fetch ME
export async function FetchMe() {
  const response = await fetch(`${BASE_URL}/users/me`, {
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${TOKEN}`,
    },
  });
}
