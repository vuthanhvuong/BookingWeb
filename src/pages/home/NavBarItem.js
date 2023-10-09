import React from "react";
import "@fortawesome/fontawesome-free/css/all.min.css";
import styles from "./NavBarItem.module.css";

const NavBarItem = (props) => {
  return (
    <li className={`${styles.item} ${props.active && styles.active}`}>
      <div className={`fa ${props.icon}`}></div>
      <p className="">{props.type}</p>
    </li>
  );
};

export default NavBarItem;
