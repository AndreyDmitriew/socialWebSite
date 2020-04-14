import React from "react";
import styles from "./profile.module.sass";
import alps from "../../img/alps.png";
import avatar from "../../img/avatar.jpg";

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
      <div>
        <p>New post</p>
      </div>
      <div>
        <div>
          <p>Post1</p>
        </div>
        <div>
          <p>Post2</p>
        </div>
      </div>
    </div>
  );
};

export default Profile;
