import React from 'react';
import styles from './app.module.sass';
import Header from './components/header/Header';
import NavBar from './components/navBar/NavBar';
import Profile from './components/profile/Profile';

function App() {
  return (
    <div className={styles.mainContainer}>
      <Header/>
      <NavBar/>
      <Profile/>
    </div>
  );
}

export default App;
