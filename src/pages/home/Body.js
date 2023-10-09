import React from "react";
import BodyCity from "./BodyCity";
import BodyType from "./BodyType";
import BodyHotel from "./BodyHotel";

import styles from "./Body.module.css";

const Body = (props) => {
  return (
    <div className={styles.body}>
      <div className={styles["body-city"]}>
        {props.dataCity.map((dataCity) => (
          <BodyCity
            key={Math.random().toString()}
            name={dataCity.name}
            subText={dataCity.subText}
            image={dataCity.image}
          />
        ))}
      </div>
      <h4>Browse by property type</h4>
      <div className={styles["body-city"]}>
        {props.dataType.map((dataType) => (
          <BodyType
            key={Math.random().toString()}
            name={dataType.name}
            count={dataType.count}
            image={dataType.image}
          />
        ))}
      </div>
      <h4>Homes guests love</h4>
      <div className={styles["body-city"]}>
        {props.dataHotel.map((dataHotel) => (
          <BodyHotel
            key={Math.random().toString()}
            name={dataHotel.name}
            city={dataHotel.city}
            price={dataHotel.price}
            rate={dataHotel.rate}
            type={dataHotel.type}
            image_url={dataHotel.image_url}
          />
        ))}
      </div>
    </div>
  );
};

export default Body;
