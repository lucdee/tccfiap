import React from "react";
import { useState } from "react";
import { BsFillEmojiHeartEyesFill } from "react-icons/bs";
import styles from '../styles/Card.module.scss';

const Card = ( {card, id , img}) => {
 
  return (
    <a href={`/post/${id}/${card}/${img}`}>
   
    <button  className={styles['card-bt']}>
   
   <div className={styles['card']}>
   <img src={`/${img}`}></img>
   <h1>{card}</h1>
  
   <div className={styles['card-banner']}>
   
   <BsFillEmojiHeartEyesFill size={"20px"} />
   </div>
   </div>
   </button>
   
 
</a>
  );
};

export default Card;
