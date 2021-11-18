import React, { useEffect, useState } from "react";
import { Link } from "@reach/router";
// import css
import "./home.css";
// home screen with naviagtion to posts and create post
const Home = () => {
  return (
    <div>
      <h1>::&lt;Home&gt;</h1>
      <Link to="/posts">Posts</Link>
      <p></p>
      <Link to="/create-post">Create Post</Link>
    </div>
  );
};

// create post screen with form to create post
const CreatePost = () => {
  return (
    <div>
      <h1>Create Post</h1>
      <form onSubmit={handlesubmit}>
        <label>Username</label>
        <input type="text" name="username" />
        <p></p>
        <label>Title</label>
        <input type="text" name="title" />
        <p></p>
        <label for="content">Content</label>
        <textarea id="content" name="content" placeholder="Write something.." style={{ height: `200px` }}></textarea>
        <input type="submit" value="Submit" />
      </form>
    </div>
  );
};

function handlesubmit(event) {
  // check if everything is filled out
  if (
    event.target.title.value === "" ||
    event.target.content.value === "" ||
    event.target.username.value === ""
  ) {
    alert("Please fill out all fields");
    return;
  }

  event.preventDefault();
  const data = new FormData(event.target);
  const post = {
    username: data.get("username"),
    title: data.get("title"),
    content: data.get("content"),
  };
  const postPost = async () => {
    const response = await fetch("https://worker.xegoist.workers.dev/add_new", {
      method: "POST",
      body: JSON.stringify(post),
    });
    const res = await response
    // check if 200 response
    if (res.status === 200) {
      alert("Post created");
      // redirect to home
      window.location.href = "/";
    } else {
      alert("Error creating post");
    }
  }
  postPost();
}



export default Home;
// export CreatePost no default export
export { CreatePost };