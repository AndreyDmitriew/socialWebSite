import React from "react";
import styles from "./Post.module.sass";

let Post = (props) => {

  return (
    <div className={styles.postContainer}>
      <div>
        <p>New post</p>
      </div>
        <div>
          <p>{props.message}</p>
        </div>
      <div>
        <img src="https://uznayvse.ru/images/stories2016/uzn_1482141314.jpg"></img>
      </div>
    </div>
  );
};

export default Post;    
