import React from "react";
import HeaderSearchMenu from "./HeaderSearchMenu";
import styles from "./Header.module.css";

const Header = (props) => {
  return (
    <div className={styles.header}>
      <div className={styles["header-title"]}>
        <h1>A lifetime of discounts? It's Genius</h1>
        <p>
          Get rewarded for your travels - unlock instant savings of 10% or more
          with a free account
        </p>
        <button type="button">Sign in / Register</button>
      </div>
      <HeaderSearchMenu />
    </div>
  );
};

export default Header;
