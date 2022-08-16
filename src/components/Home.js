import React, { useState } from "react";
import Layout from "./Layout";
import styles from '../styles/Home.module.scss';
import Card from "./Card";
import Video from "./Video";
import SimpleMap from "./MapPage";

const Home = () => {

  const [isMenuOpen, setIsMenuOpen] = useState(true);
 
  return (
    <div  className={styles['principal']}>
    <Layout/>
    <SimpleMap/>
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
    <div className={styles['hero']}>
   
      
     <div     className={`${styles["categories"]} ${
            isMenuOpen ? styles["categories-open"] : ""
          }`}>
   
        <button>Para você</button>
        <button>Videos</button>
        <button>Posts</button>
        <button>Gravadoras</button>
        <button>Escolas/salões</button>
        <button>Eventos</button>
     </div>

<div>
     <div className={styles['destaques']}>
       <h1>Destaques da semana</h1>
       <div  className={styles['destaques-card']}>
       <Card card={"Card"}/>
       <Card card={"Card"}/>
       <Card card={"Card"}/>
       <Card card={"Card"}/>
       
       </div>
     </div>

     
     <div className={styles['destaques']}>
       <h1>Gravadoras</h1>
       <div  className={styles['destaques-card']}>
       <Card card={"Card"}/>
       <Card card={"Card"}/>
       <Card card={"Card"}/>
       <Card card={"Card"}/>
       
       </div>
     </div>

     <div className={styles['destaques']}>
       <h1>Videos</h1>
       <div  className={styles['destaques-card']}>
       <Video/>
       <Video/>
       <Video/>
       <Video/>
       </div>
     </div>
    </div>
    </div>
    </div>
  );
};

export default Home;
