import React from "react";

import styles from "./BodyType.module.css";

const BodyType = (props) => {
  return (
    <div className={styles.scale}>
      <img src={props.image} className={styles.img}></img>
      <div className={styles["img-sub"]}>
        <h3>{props.name}</h3>
        <p>{props.count}</p>
      </div>
    </div>
  );
};

export default BodyType;
