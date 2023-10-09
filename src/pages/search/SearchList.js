import React from "react";
import SearchListItem from "./SearchListItem";
import styles from "./SearchList.module.css";

const SearchList = (props) => {
  return (
    <div className={styles["search-list"]}>
      {props.dataSearch.map((dataSearch) => (
        <SearchListItem
          key={dataSearch.price}
          name={dataSearch.name}
          distance={dataSearch.distance}
          tag={dataSearch.tag}
          type={dataSearch.type}
          description={dataSearch.description}
          free_cancel={dataSearch.free_cancel}
          price={dataSearch.price}
          rate={dataSearch.rate}
          rate_text={dataSearch.rate_text}
          image_url={dataSearch.image_url}
        />
      ))}
    </div>
  );
};

export default SearchList;
