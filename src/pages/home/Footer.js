import React from "react";
import FooterColumn from "./FooterColumn";
import styles from "./Footer.module.css";

const Footer = (props) => {
  return (
    <div className={styles["footer"]}>
      {props.dataFooter.map((dataFooter) => (
        <FooterColumn
          key={dataFooter.col_number}
          value={dataFooter.col_values}
        />
      ))}
    </div>
  );
};

export default Footer;
