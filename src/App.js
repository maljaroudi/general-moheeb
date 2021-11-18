import { Router } from "@reach/router";

import Posts from './components/posts'
import Post from './components/post'
import Home from './components/home'
import { CreatePost } from "./components/home";
function App() {
  return (
    <Router>
      <Home path="/" />
      <Posts path="/posts" />
      <Post path="/posts/:id" />
      <CreatePost path="/create-post" />
    </Router>
  );
}

export default App;