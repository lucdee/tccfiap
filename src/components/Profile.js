import React from "react";
import Layout from "./Layout";
import styles from '../styles/Profile.module.scss';

import Video from "./Video";
import { CgProfile } from "react-icons/cg";
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
  </div>
  </div>

<div>
     <div className={styles['destaques']}>
       <h1>Posts</h1>
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
