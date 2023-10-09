import React, { useState, useEffect, useRef } from "react";
import { addDays, format } from "date-fns";
import { DateRange } from "react-date-range";
import "react-date-range/dist/styles.css"; // main style file
import "react-date-range/dist/theme/default.css"; // theme css file
import styles from "./HeaderSearchMenu.module.css";

const HeaderSearchMenu = (props) => {
  const clickButtonHandler = () => {
    //Di chuyển đến trang Search khi click button Search
    window.location.replace("/search");
  };

  const [range, setRange] = useState([
    {
      startDate: new Date(),
      endDate: addDays(new Date(), 7),
      key: "selection",
    },
  ]);
  const [isOpen, setIsOpen] = useState(false);
  const refCalen = useRef(null);

  //Khi ấn nút bên ngoài vùng date range
  const clickOutsideHandler = (event) => {
    if (refCalen.current && !refCalen.current.contains(event.target)) {
      setIsOpen(false);
    }
  };

  //Khi ấn nút ESC
  const clickESCHandler = (event) => {
    if (event.key === "Escape") {
      setIsOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener("click", clickOutsideHandler, true);
    document.addEventListener("keydown", clickESCHandler, true);
  }, []);

  return (
    <div className={styles.start}>
      <div className={styles.menu}>
        <div className={styles["menu-item"]}>
          <i className="fa fa-bed"></i>
          <input placeholder="Where are you going?" type="text"></input>
        </div>
        <div className={styles["menu-item"]}>
          <i className="fa fa-calendar"></i>
          <input
            placeholder="06/2022 to  06/2023"
            readOnly
            value={`${format(range[0].startDate, "dd-MM-yyyy")} - ${format(
              range[0].endDate,
              "dd-MM-yyyy"
            )}`}
            onClick={() => {
              setIsOpen(true);
            }}
          ></input>
        </div>

        <div className={styles["menu-item"]}>
          <i className="fa fa-female"></i>
          <input placeholder="1 adult 0 children 1 room" type=""></input>
        </div>
        <button onClick={clickButtonHandler}>Search</button>
      </div>
      {isOpen && (
        <div ref={refCalen}>
          <DateRange
            onChange={(item) => setRange([item.selection])}
            editableDateInputs={true}
            moveRangeOnFirstSelection={false}
            className={styles.date}
            ranges={range}
            months={2}
            direction="horizontal"
          />
        </div>
      )}
    </div>
  );
};

export default HeaderSearchMenu;
