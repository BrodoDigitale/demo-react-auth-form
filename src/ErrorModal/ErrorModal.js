import React from "react";
import classes from "./ErrorModal.module.css";
import { Button } from "../UI/Button/Button";
import { Card } from "../UI/Card/Card";

export const ErrorModal = ({ onClose, title, message }) => {
  return (
    <>
      <div className={classes.backdrop} onClick={onClose} />
      <Card extraClasses={classes.modal}>
        <header className={classes.header}>
          <h2>{title}</h2>
        </header>
        <div className={classes.content}>
          <p>{message}</p>
        </div>
        <footer className={classes.actions}>
          <Button onClick={onClose}>Close</Button>
        </footer>
      </Card>
    </>
  );
};
