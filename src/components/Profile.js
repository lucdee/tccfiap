import React from "react";
import Layout from "./Layout";
import styles from '../styles/Profile.module.scss';

import Video from "./Video";
import Card from "./Card";
import { CgProfile } from "react-icons/cg";
import { RiRadioButtonLine } from "react-icons/ri";
import { useUserAuth } from "../context/UserAuthContext";



const Profile = () => {

 
  const {  user } = useUserAuth();
  return (
    <div  className={styles['principal']}>
    <Layout/>
    
   

    <div className={styles['hero']}>
   
  <div className={styles['hero-banner']}> 
  <img src="bannerex.png"></img>
  <div className={styles['hero-banner-txt']}>
  <CgProfile className={styles['icon-profile']}/>

  <h2>{user && user.email}</h2>
 <div>
  <RiRadioButtonLine color="green" />
  <h2>Online</h2>
  </div>

  </div>
  </div>

  <div className={styles['hero-descricao']}>
   <h1>Descrição</h1>
    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electr.</p>
  </div>
<div  className={styles['divisor']}></div>
<div>
     <div className={styles['destaques']}>
      <h1>Posts</h1>
       <div  className={styles['destaques-card']}>
       
       <Card card={"Card"}/>
   
       
       </div>
     </div>
     <div className={styles['destaques']}>
      <h1>Videos</h1>
       <div  className={styles['destaques-card']}>
       
       <Video/>
       <Video/>
       
       </div>
     </div>
     
   

    
    </div>
    </div>
    </div>
  );
};

export default Profile;
