import React from "react";
import styles from "./MyPosts.module.sass";
import Post from "./Post/Post.jsx";

let MyPosts = () => {
  return (
    <div>
      <Post/>
      <div>
        <Post message={"Hello everybody !"}/>
        <Post message={"hi there !"}/>
      </div>
    </div>
  );
};

export default MyPosts;
