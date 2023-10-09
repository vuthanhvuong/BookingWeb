import React from "react";

import styles from "./DetailBody.module.css";

const DetailBody = (props) => {
  return (
    <div className={styles["detail-body"]}>
      <div className={styles["detail-body-top"]}>
        <div className={styles["detail-body-top-title"]}>
          <h3>{props.dataDetail.name}</h3>
          <div className={styles.place}>
            <i className="fa fa-location"></i>
            <p>{props.dataDetail.address}</p>
          </div>
          <p className={styles.textblue}>{props.dataDetail.distance}</p>
          <p className={styles.textgreen}>{props.dataDetail.price}</p>
        </div>
        <button className={styles["detail-body-top-button"]}>
          Reserve or Book Now!
        </button>
      </div>
      <div className={styles["detail-body-middle"]}>
        {props.dataDetail.photos.map((photo) => (
          <img src={photo} key={Math.random().toString()} />
        ))}
      </div>
      <div className={styles["detail-body-bot"]}>
        <div className={styles["detail-body-bot-title"]}>
          <h3>{props.dataDetail.title}</h3>
          <p>{props.dataDetail.description}</p>
        </div>
        <div className={styles["detail-body-bot-book"]}>
          <h4>Perfect for a 9-night stay!</h4>
          <p className={styles["detail-body-bot-book-p"]}>
            Located in the real heart of Krakow, this property has an excellent
            location score of 9.8!
          </p>
          <p className={styles["detail-body-bot-book-price"]}>
            <strong>{`$${props.dataDetail.nine_night_price}`}</strong>
            {"     (9 nights)"}
          </p>
          <button className={styles["detail-body-top-button"]}>
            Reserve or Book Now!
          </button>
        </div>
      </div>
    </div>
  );
};

export default DetailBody;
