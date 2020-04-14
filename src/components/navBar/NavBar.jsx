import React from "react";
import styles from './navBar.module.sass';


let NavBar = () => {
  return (
    <nav className={styles.navBar}>
      <div>
        <p>
          Profile
        </p>
      </div>
      <div>
        <p>
          Messages
        </p>
      </div>
      <div>
        <p>
          News
        </p>
      </div>
      <div>
        <p>
          Music
        </p>
      </div>
      <div>
        <p>
          Settings
        </p>
      </div>
    </nav>
  );
};

export default NavBar;
