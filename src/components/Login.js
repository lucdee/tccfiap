import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Form, Alert } from "react-bootstrap";
import { Button } from "react-bootstrap";
import GoogleButton from "react-google-button";
import { useUserAuth } from "../context/UserAuthContext";
import styles from '../styles/Login.module.scss';

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const { logIn, googleSignIn } = useUserAuth();
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    try {
      await logIn(email, password);
      navigate("/home");
    } catch (err) {
      setError(err.message);
    }
  };

  const handleGoogleSignIn = async (e) => {
    e.preventDefault();
    try {
      await googleSignIn();
      navigate("/home");
    } catch (error) {
      console.log(error.message);
    }
  };

  return (
    <>
     
    <div className={styles['busca-section']} style={{ display: "flex" , width: "100%"}}>
<div className={styles['banner']} >
  
  <img src="/image39.png"></img>
  
</div>
<div className={styles['table']}>
  <h1>Crie ou logue em sua conta e faça parte da nossa comunidade</h1>
  
      <div  className="p-4 box" style={{ background: "white" , boxShadow: "1px 1px 5px  black" ,borderRadius: "10px"}}>
        <h2 className="mb-3" style={{ color: "gray" }}>Login</h2>
        {error && <Alert variant="danger">{error}</Alert>}
        <Form onSubmit={handleSubmit}>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Control
              type="email"
              placeholder="Email address"
              onChange={(e) => setEmail(e.target.value)}
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Control
              type="password"
              placeholder="Password"
              onChange={(e) => setPassword(e.target.value)}
            />
          </Form.Group>

          <div className="d-grid gap-2">
            <Button variant="primary" type="Submit">
              Log In
            </Button>
          </div>
        </Form>
        <hr />
        <div >
          <GoogleButton style={{width: "100%"}}
            className="g-btn"
            type="dark"
            onClick={handleGoogleSignIn}
          />
        </div>
      </div>
      
      <div className="p-4 box mt-3 text-center" style={{ backgroundColor: "white" , boxShadow: "1px 1px 5px  black" , borderRadius: "10px"}}>
      <h1 style={{ fontSize: "20px" , color: "gray"}}> Ou </h1> <hr style={{ backgroundColor: "black" }} /> 
        <Link to="/signup"><p>Crie sua conta</p></Link>
      </div>
      </div>
    </div>
    </>
  );
};

export default Login;
