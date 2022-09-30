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
     <AiOutlineClose size="30px" onClick={() => setIsMenuOpen(false)}/>
     </article>
   
     <Formik
      initialValues={{
        firstName: '',
        lastName: '',
        email: '',
      }}
      onSubmit={async (values) => {
        await new Promise((r) => setTimeout(r, 500));
        alert(JSON.stringify(values, null, 2));
        send(values)
      }}
    >
      <Form>
        <label htmlFor="firstName">First Name</label>
        <Field id="firstName" name="firstName" placeholder="Jane" />

        <label htmlFor="lastName">Last Name</label>
        <Field id="lastName" name="lastName" placeholder="Doe" />

        <label htmlFor="email">Email</label>
        <Field
          id="email"
          name="email"
          placeholder="jane@acme.com"
          type="email"
        />
        <button type="submit">Submit</button>
      </Form>
    </Formik>
   
     </div>
   
    </div>
  );
};

export default Sub;
