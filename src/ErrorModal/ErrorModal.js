import React from "react";
import classes from "./ErrorModal.module.css";
import { Button } from "../UI/Button/Button";

export const ErrorModal = ({ onClose }) => {
  return (
    <div className={classes.backdrop}>
      <div className={classes.modal}>
        <div className={classes.header}>
          <h2>Incorrect Input</h2>
        </div>
        <div className={classes.actions}>
          <Button onClick={onClose} />
        </div>
      </div>
    </div>
  );
};
