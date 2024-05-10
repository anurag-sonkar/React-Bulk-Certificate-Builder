import React from "react";
import styles from "./App.module.css";
import Header from "./Components/Header/Header";
import Hero from "./Components/Hero/Hero";

function App() {
  return (
    <div
      className={styles.App}
      style={{
        background: "rgb(7,25,51)",
        backgroundImage:
          "linear-gradient(90deg, rgba(7,25,51,1) 0%, rgba(18,42,84,1) 24%, rgba(4,21,45,1) 100%)",
      }}
    >
      <div className={styles.themeContainer}>
        <div className={styles.selectTheme}>
          <div></div>
          <div></div>
        </div>
      </div>
      <div className={styles.Container}>
        <Header />
        <Hero />
      </div>
    </div>
  );
}

export default App;
