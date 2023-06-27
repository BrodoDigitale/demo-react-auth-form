import React from "react";
import classes from "./Card.module.css";

export const Card = ({ children, extraClasses }) => {
  return <div className={`${classes.card} ${extraClasses}`}>{children}</div>;
};
