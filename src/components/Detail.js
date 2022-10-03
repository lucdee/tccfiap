import React, { useState } from "react";
import { useParams } from "react-router-dom";
import styles from '../styles/Detail.module.scss';
import Layout from "./Layout";
import { BsShare } from "react-icons/bs";
import { TbDoorEnter} from "react-icons/tb";
import Sub from "./Sub";

const Detail = () => {
  const { id } = useParams();
  const { card } = useParams();
  const { img } = useParams();

  const [isMenuOpen, setIsMenuOpen] = useState(false);
  console.log(isMenuOpen)
  return (
    <>
      {isMenuOpen && <Sub card={card} setIsMenuOpen={setIsMenuOpen}></Sub>}
      <Layout></Layout>
      <div className={styles["card-bt"]}>
        <img className={styles["card-bt-img"]} src={`/${img}`}></img>
        <div className={styles["card-bt-title"]}>
          <p> #{id} </p>
          <p> {card} </p>
          <p>
          O ensino de qualidade desenvolvido no Salão {card} tem levado seus alunos a conquistar vagas para aperfeiçoar seus estudos no exterior (Miami e Nova York – EUA) e Vancouver (CAN).
          </p>
          <div className={styles["footer"]}> 
          <TbDoorEnter size="25px"  onClick={() => setIsMenuOpen(true)}/>
           <BsShare size="25px"/>
  
          </div>
        
        </div>
      </div>
    </>
  );
};

export default Detail;
