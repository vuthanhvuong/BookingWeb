import React from "react";
import styles from "./SearchListItem.module.css";

const SearchListItem = (props) => {
  return (
    <div className={styles["search-list-item"]}>
      <img src={props.image_url}></img>
      <div className={styles["search-list-item-middle"]}>
        <h4>{props.name}</h4>
        <p>{`${props.distance} from center`}</p>
        <p className={styles.tag}>{props.tag}</p>
        <h5>{props.description}</h5>
        <p>{props.type}</p>
        {props.free_cancel && <h5 className={styles.grn}>Free cancellation</h5>}
        {props.free_cancel && (
          <p className={styles.grn}>
            You can cancel later, so lock in this great price today!
          </p>
        )}
      </div>
      <div className={styles["search-list-item-left"]}>
        <div className={styles.rate}>
          <h6>{props.rate_text}</h6>
          <p>{props.rate}</p>
        </div>
        <div className={styles.price}>
          <p>{`$${props.price}`}</p>
          <p className={styles.note}>Includes taxes amd fees</p>
          <button>See availability</button>
        </div>
      </div>
    </div>
  );
};

export default SearchListItem;
