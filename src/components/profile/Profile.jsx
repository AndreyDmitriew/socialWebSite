import React from "react";
import styles from "./profile.module.sass";
import alps from "../../img/alps.png";
import avatar from "../../img/avatar.jpg";
import MyPosts from "./MyPosts/MyPosts";

let Profile = () => {
  return (
    
    <div className={styles.profile}>

      <div>
        <img src={alps} alt="alps"></img>
      </div>

      <div>
        <div>
          <img src={avatar} alt="avatar" className={styles.avatar}></img>
        </div>
        <div>
          <p>Avatar</p>
        </div>
      </div>

      <div>
        <p>Discription</p>
      </div>

      <MyPosts/>

    </div>
  );
};

export default Profile;
