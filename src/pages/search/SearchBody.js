import React from "react";
import SearchPopup from "./SearchPopup";
import SearchList from "./SearchList";

import styles from "./SearchBody.module.css";

const SearchBody = (props) => {
  return (
    <div className={styles["search-body"]}>
      <SearchPopup />
      <SearchList dataSearch={props.dataSearch} />
    </div>
  );
};

export default SearchBody;
