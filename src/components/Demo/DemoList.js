import classes from "./DemoList.module.css";
import React from "react";
const DemoList = (props) => {
  const { items } = props;

  console.log("DemoList RUNNING");

  return (
    <div className={classes.list}>
      <h2>{props.title}</h2>
      <ul className={classes.ul}>
        {items.map((item) => (
          <li className={classes.li} key={item}>
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default React.memo(DemoList);
