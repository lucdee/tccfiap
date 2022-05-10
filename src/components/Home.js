import React from "react";
import { Button } from "react-bootstrap";
import { useNavigate } from "react-router";
import { useUserAuth } from "../context/UserAuthContext";
import styles from '../styles/Home.module.scss';

const Home = () => {
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
    <>
      <div className={styles['menu']}>
      <h1>App Dança</h1>
      <div className={styles['menu-user']}>
   <p> {user && user.displayName} </p> 
        <Button variant="primary" onClick={handleLogout}>
          Log out 
        </Button>
        </div>
      </div>
      
      <div className="d-grid gap-2">
        
      </div>
    </>
  );
};

export default Home;
