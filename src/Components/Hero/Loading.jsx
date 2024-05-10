import React from "react";
import styles from "./Loading.module.css";
function Loading() {
  return (
    <div class={styles.center}>
      <div class={styles.wave}></div>
      <div class={styles.wave}></div>
      <div class={styles.wave}></div>
      <div class={styles.wave}></div>
      <div class={styles.wave}></div>
      <div class={styles.wave}></div>
      <div class={styles.wave}></div>
      <div class={styles.wave}></div>
      <div class={styles.wave}></div>
      <div class={styles.wave}></div>
    </div>
  );
}

export default Loading;
