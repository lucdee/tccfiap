import { Field, Form, Formik } from "formik";
import React, { useEffect, useState } from "react";
import { AiOutlineClose } from "react-icons/ai";
import styles from "../styles/Sub.module.scss";
import emailjs from "emailjs-com"

const Sub = ({ card, id, img, setIsMenuOpen }) => {

 
  
  
 

const send = async values => {
  emailjs.send("service_sq94w6d", "template_1emgebk", values , "PWmsJ6JYjZKg74KL6")
  .then((result) => {
    console.log("sucess");

  }, (error) => {
    console.log(error.text)
  })
}
  
  return (
    <div className={styles['cont']}>
     <div className={styles['cont-form']}>
    
      <article>
     <h2>Inscreva-se para {card}</h2>
     <AiOutlineClose size="20px" onClick={() => setIsMenuOpen(false)}/>
     </article>
   
     <Formik
      initialValues={{
        firstName: '',
        lastName: '',
        email: '',
      }}
      onSubmit={async (values) => {
        await new Promise((r) => setTimeout(r, 500));
        alert("Inscrição efetuada");
        send(values)
      }}
    >
      <Form>

        <label  className={styles['label']} htmlFor="firstName">Seu Nome
        <Field id="firstName" name="firstName" placeholder="Jane" />
        </label>
     

        <label className={styles['label']} htmlFor="lastName">Data
        <Field id="lastName" name="lastName" placeholder="" type="date"/>
        </label>
       

        <label className={styles['label']} htmlFor="email">Email
        <Field
          id="email"
          name="email"
          placeholder="jane@acme.com"
          type="email"
        />
        </label>
       

        <label className={styles['label']}>
        <button type="submit">Enviar</button>
        </label>
      </Form>
    </Formik>
   
     </div>
   
    </div>
  );
};

export default Sub;
