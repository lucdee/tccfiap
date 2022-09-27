import React from "react";
import styles from "../styles/Local.module.scss";

const Local = ({ card, id, img }) => {
  return (
    <a href={`/post/${id}/${card}/${img}`} className={styles["card-bt"]} >
      <button className={styles["card-bt"]}>
        <div className={styles["card"]}>
          <img src={`/${img}`}></img>
         

          <div className={styles["card-banner"]}>
          <h1>{card}</h1>
          </div>
        </div>
      </button>
    </a>
  );
};

export default Local;
