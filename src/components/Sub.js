import { Field, Form, Formik } from "formik";
import React from "react";
import { AiOutlineClose } from "react-icons/ai";
import { FcLike } from "react-icons/fc";
import styles from "../styles/Sub.module.scss";

const Sub = ({ card, id, img, setIsMenuOpen }) => {
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
      }}
    >
        <div className={styles['form']}>
      <Form>
       <div className={styles['row']}>
        <Field  id="firstName" name="firstName" placeholder="nome" />
        </div>
        <div className={styles['row']}>
        <Field id="lastName" name="lastName" placeholder="data" type="date" />
        </div>
      
        <div className={styles['row']}>
        <Field
          id="email"
          name="email"
          placeholder="email"
          type="email"
        />
        </div>
       <button type="submit">Cadastrar</button>
      </Form>
      </div>
    </Formik>
   
     </div>
   
    </div>
  );
};

export default Sub;
