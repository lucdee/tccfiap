import React from "react";
import { BsFillPlayFill } from "react-icons/bs";
import styles from '../styles/Card.module.scss';

const Video = () => {

 
 
  return (
    <button className={styles['card-bt']}>
   <div className={styles['card']}>
   
  
   <BsFillPlayFill size={"100px"} />
  
   </div>
   </button>
  );
};

export default Video;
