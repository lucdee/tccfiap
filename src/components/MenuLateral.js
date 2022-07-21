import React, { useState } from "react";
import styles from '../styles/MenuLateral.module.scss';
import { AiOutlineHome } from "react-icons/ai";

const MenuLateral = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <>
      <div
        className={`${styles["menu-lateral"]} ${
          isMenuOpen ? styles["menu-lateral-open"] : ""
        }`}
      >
        <button
          className={`${styles["toggler-button"]} ${
            isMenuOpen ? styles["is-menu-open"] : ""
          }`}
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          type="button"
        >
          <span className={styles.line} />
          <span className={styles.line} />
          <span className={styles.line} />
        </button>
        <span
          className={`${styles["div-menu"]} ${
            isMenuOpen ? styles["div-menuOpen"] : ""
          }`}
        >
          <a href="/home">
            <AiOutlineHome size={30}></AiOutlineHome>
            <h1>Home</h1>
          </a>
        </span>
      </div>
    </>
  );
};

export default MenuLateral;
