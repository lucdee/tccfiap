import React, { useState } from "react";
import Layout from "./Layout";
import styles from '../styles/Home.module.scss';
import Card from "./Card";
import Video from "./Video";


const Home = () => {

  const [isMenuOpen, setIsMenuOpen] = useState(true);
 
  return (
    <div className={styles["principal"]}>
      <Layout />
      <a href="/map">
        <img
          style={{
            display: "flex",
            margin: "20px auto",
            width: "95%",
            height: "300px",
          }}
          src="mapa.png"
        ></img>
      </a>
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
      <div className={styles["hero"]}>
        <div
          className={`${styles["categories"]} ${
            isMenuOpen ? styles["categories-open"] : ""
          }`}
        >
          <button>Para você</button>
          <button>Videos</button>
          <button>Posts</button>
          <button>Gravadoras</button>
          <button>Escolas/salões</button>
          <button>Eventos</button>
        </div>

        <div>
          <div className={styles["destaques"]}>
            <h1>Destaques da semana</h1>
            <div className={styles["destaques-card"]}>
              <Card img={"foto2.jpg"} card={"Card"} id={1} />
              <Card img={"foto3.jpg"} card={"Card"} id={1} />
              <Card img={"foto4.jpg"} card={"Card"} id={1} />
              <Card img={"foto5.jpg"} card={"Card"} id={1} />
            </div>
          </div>

          <div className={styles["destaques"]}>
            <h1>Estúdios de Dança</h1>
            <div className={styles["destaques-card"]}>
              <Card img={"foto6.jpg"} card={"Card"} id={1} />
              <Card img={"foto8.jpg"} card={"Card"} id={1} />
              <Card img={"foto2.jpg"} card={"Card"} id={1} />
              <Card img={"foto5.jpg"} card={"Card"} id={1} />
            </div>
          </div>

          <div className={styles["destaques"]}>
            <h1>Videos</h1>
            <div className={styles["destaques-card"]}>
              <Video img={"foto3.jpg"} card={"Card"} id={1} />
              <Video img={"foto4.jpg"} card={"Card"} id={1} />
              <Video img={"foto2.jpg"} card={"Card"} id={1} />
              <Video img={"foto2.jpg"} card={"Card"} id={1} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
