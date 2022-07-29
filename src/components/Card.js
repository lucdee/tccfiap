import React from "react";
import { BsFillEmojiHeartEyesFill } from "react-icons/bs";
import styles from '../styles/Card.module.scss';

const Card = ( {card}) => {

 
 
  return (
    <button className={styles['card-bt']}>
   <div className={styles['card']}>
   <h1>{card}</h1>
   <div className={styles['card-banner']}>
   <BsFillEmojiHeartEyesFill size={"20px"} />
   </div>
   </div>
   </button>
  );
};

export default Card;
