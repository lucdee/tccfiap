import React from "react";
import Layout from "./Layout";
import styles from '../styles/Home.module.scss';
import Card from "./Card";
import Video from "./Video";

const Home = () => {

 
 
  return (
    <>
    <Layout/>
    <div className={styles['hero']}>
    <figure className={styles['hero-img']}></figure>
      
     <div className={styles['categories']}>
        <button>Para você</button>
        <button>Videos</button>
        <button>Posts</button>
        <button>Gravadoras</button>
        <button>Escolas/salões</button>
        <button>Eventos</button>
     </div>

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

    </>
  );
};

export default Home;
