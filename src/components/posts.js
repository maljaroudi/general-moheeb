import React, { useEffect, useState } from "react";
import { Link } from "@reach/router";
//import css
import "./posts.css";
const Posts = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const getPosts = async () => {
      // set header for CORS
      const corsHeaders = {
        "Acess-Control-Allow-Origin": "*",
      }

      const resp = await fetch(
        "https://worker.xegoist.workers.dev/posts"
      );
      const postsResp = await resp.json();
      setPosts(postsResp);
    };

    getPosts();
  }, []);

  return (
    <div id="related_links">
      <h1>Posts</h1>
      {posts.map((post) => (
        <div key={post.username}>
            <h2>
              <Link to={`/posts/${post.username}`}>{post.title}</Link>
            </h2>
        </div>
      ))}
      <h1 id="homer">Home</h1>
      <Link to="/">Home</Link>
    </div>
  );
};

export default Posts;