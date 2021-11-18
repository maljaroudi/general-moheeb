import React, { useEffect, useState } from "react";
import { Link } from "@reach/router";
//import post.css
import "./post.css";
const Post = ({ id }) => {
  const [post, setPost] = useState({});

  useEffect(() => {
    const getPost = async () => {
      const resp = await fetch(
        `https://worker.xegoist.workers.dev/posts`
      );
      const postResp = await resp.json();
      // grab the post with the id from the url
      const post = postResp.find(post => post.username === id);
      setPost(post);
    };

    getPost();
  }, [id]);

  if (!Object.keys(post).length) return <div />;

  return (
    <div>
      <h1>{post.title}</h1>
      <p>{post.text}</p>
      <p>
        <em id="Username">User: {post.username}</em>
      </p>
      <textarea id="comment" readonly disabled>{post.content}</textarea>
      <p>
        <Link to="/">Go back</Link>
      </p>
    </div >
  );
};

export default Post;