import React from "react";
import { Button } from "react-bootstrap";
import { useNavigate } from "react-router";
import { useUserAuth } from "../context/UserAuthContext";
import styles from '../styles/Layout.module.scss';
import MenuLateral from "./MenuLateral";
import { CgProfile } from 'react-icons/cg';

const Layout = () => {
  const { logOut, user } = useUserAuth();
  const navigate = useNavigate();
  const handleLogout = async () => {
    try {
      await logOut();
      navigate("/");
    } catch (error) {
      console.log(error.message);
    }
  };
  console.log(user)
  return (
    <div style={{display: "flex"}}>
   <MenuLateral/>
      <div className={styles['menu']}>
    
      <h1>LOCA DANCE</h1>
      <div className={styles['menu-user']}>
      <Button variant="primary" onClick={handleLogout}>
          Sair
        </Button>
   <p> {user && user.email} </p> 
  <a href="/profile"><CgProfile className={styles['icon-profile']}/> </a> 
       
        </div>
      </div>
     
      
   
    </div>
  );
};

export default Layout;
