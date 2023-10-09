import React, { useState } from "react";
import NavBarItem from "./NavBarItem";
import styles from "./NavBar.module.css";

const NavBar = (props) => {
  const clickHomeHandler = () => {
    //Di chuyển đến trang Search khi click button Search
    window.location.replace("/");
  };
  return (
    <div className={styles.navbar}>
      <div className={styles["navbar-header"]}>
        <p onClick={clickHomeHandler}>Booking Website</p>
        <div className={styles["navbar-actions"]}>
          <button>Register</button>
          <button>Login</button>
        </div>
      </div>
      {/* <ul className={styles["navbar-menu"]}>
        {props.dataNavbarMenu.map((dataNavbarMenu) => (
          <NavBarItem dataNavbarMenu={dataNavbarMenu} />;
        ))}
      </ul> */}
      <ul className={styles["navbar-menu"]}>
        {props.dataNavbarMenu.map((dataNavbarMenu) => (
          <NavBarItem
            key={Math.random().toString()}
            type={dataNavbarMenu.type}
            icon={dataNavbarMenu.icon}
            active={dataNavbarMenu.active}
          />
        ))}
      </ul>
    </div>
  );
};

export default NavBar;
