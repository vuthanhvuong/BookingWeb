import React from "react";
import styles from "./Form.module.css";

const Form = (props) => {
  return (
    <div className={styles.form}>
      <h1>Save time, save money!</h1>
      <p>Sign up and we'll send the best deals to you</p>
      <div className={styles["form-email"]}>
        <input type="text" placeholder="Your Email"></input>
        <button>Subscribe</button>
      </div>
    </div>
  );
};

export default Form;
