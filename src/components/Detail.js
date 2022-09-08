import React from "react";
import { useParams } from "react-router-dom";
import styles from '../styles/Detail.module.scss';
import Layout from "./Layout";

const Detail = ( ) => {
  const { id } = useParams();
  const { card } = useParams();
  const { img } = useParams();

  return (
    <>
    <Layout></Layout>
   <div  className={styles['card-bt']}>
     <img className={styles['card-bt-img']} src={`/${img}`}></img>
    <div className={styles['card-bt-title']}> 
  <p> #{id} </p> 
  <p> {card} </p>
  </div>


 
   </div>
   </>
  );
};

export default Detail;
