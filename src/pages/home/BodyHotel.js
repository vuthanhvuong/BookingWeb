import React from "react";

import styles from "./BodyHotel.module.css";

const BodyHotel = (props) => {
  return (
    <div className={styles.scale}>
      <img src={props.image_url} className={styles.img}></img>
      <div className={styles["img-sub"]}>
        <a href="/detail">{props.name}</a>
        <p>{props.city}</p>
        <h4>{`Starting from $${props.price}`}</h4>
        <div className={styles["img-sub-rate"]}>
          <div>{props.rate}</div>
          <div>{props.type}</div>
        </div>
      </div>
    </div>
  );
};

export default BodyHotel;
