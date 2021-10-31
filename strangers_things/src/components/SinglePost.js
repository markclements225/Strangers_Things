import React from "react";

function SinglePost({ post }) {
    return (
        <div>
            <h2>{post.title}</h2>
            <ul>
                <li>{post.description}</li>
                <li>{post.price}</li>
                <li>{post.willDeliver}</li>
            </ul>
        </div>
    )
}

export default SinglePost;