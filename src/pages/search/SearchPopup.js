import React from "react";
import styles from "./SearchPopup.module.css";

const SearchPopup = (props) => {
  return (
    <div className={styles["search-popup"]}>
      <h2>Search</h2>
      <form className={styles["search-popup-head"]}>
        <label>Destination</label>
        <input type="text"></input>
      </form>
      <form className={styles["search-popup-head"]}>
        <label>Check-in Date</label>
        <input placeholder="06/24/2022 to 06/24/2022"></input>
      </form>
      <form className={styles["search-popup-body"]}>
        <label className={styles["search-popup-body-label"]}>Options</label>
        <div className={styles["search-popup-body-detail"]}>
          <label>Min price per night</label>
          <input type="number"></input>
        </div>
        <div className={styles["search-popup-body-detail"]}>
          <label>Max price per night</label>
          <input type="number"></input>
        </div>
        <div className={styles["search-popup-body-detail"]}>
          <label>Adult</label>
          <input type="number" placeholder="1"></input>
        </div>
        <div className={styles["search-popup-body-detail"]}>
          <label>Children</label>
          <input type="number" placeholder="0"></input>
        </div>
        <div className={styles["search-popup-body-detail"]}>
          <label>Room</label>
          <input type="number" placeholder="1"></input>
        </div>
      </form>
      <button>Search</button>
    </div>
  );
};

export default SearchPopup;
