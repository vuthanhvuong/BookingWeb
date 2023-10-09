import React from "react";
import FooterRow from "./FooterRow";
import styles from "./FooterColumn.module.css";

const FooterColumn = (props) => {
  return (
    <div className={styles["footer-column"]}>
      {props.value.map((dataFooter) => (
        <FooterRow value={dataFooter} key={Math.random().toString()} />
      ))}
    </div>
  );
};

export default FooterColumn;
