import React from "react";

import styles from "./BodyCity.module.css";

const BodyCity = (props) => {
  return (
    <div className={styles.scale}>
      <img src={props.image} className={styles.img}></img>
      <div className={styles["img-sub"]}>
        <h3>{props.name}</h3>
        <p>{props.subText}</p>
      </div>
    </div>
  );
};

export default BodyCity;
