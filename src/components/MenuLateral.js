import React, { useState } from "react";
import { Button } from "react-bootstrap";

import styles from '../styles/MenuLateral.module.scss';

const MenuLateral = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
 
  return (
    <>
      <div    className={`${styles['menu-lateral']} ${
              isMenuOpen ? styles['menu-lateral-open'] : ''
            }`}>
      <button
            className={`${styles['toggler-button']} ${
              isMenuOpen ? styles['is-menu-open'] : ''
            }`}
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            type="button"
          >
            <span className={styles.line} />
            <span className={styles.line} />
            <span className={styles.line} />
          </button>
      </div>
      
   
    </>
  );
};

export default MenuLateral;
