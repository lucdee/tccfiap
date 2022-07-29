import React from "react";
import { Button } from "react-bootstrap";
import { useNavigate } from "react-router";
import { useUserAuth } from "../context/UserAuthContext";
import styles from '../styles/Layout.module.scss';
import MenuLateral from "./MenuLateral";

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
   <p> {user && user.email} </p> 
        <Button variant="primary" onClick={handleLogout}>
          Sair
        </Button>
        </div>
      </div>
     
      
   
    </div>
  );
};

export default Layout;
