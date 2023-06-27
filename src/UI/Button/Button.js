import React from "react";
import classes from "./Button.module.css";

export const Button = ({ children, type, onClick }) => {
  return (
    <button
      type={type || "button"}
      className={classes.button}
      onClick={onClick}
    >
      {children}
    </button>
  );
};
