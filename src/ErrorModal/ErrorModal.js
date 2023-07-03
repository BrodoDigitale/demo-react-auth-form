import React from "react";
import classes from "./ErrorModal.module.css";
import { Button } from "../UI/Button/Button";
import { Card } from "../UI/Card/Card";
import { createPortal } from "react-dom";

const Backdrop = ({ onClose }) => {
  return <div className={classes.backdrop} onClick={onClose} />;
};

const ModalBody = ({ onClose, title, message }) => {
  console.log("backdrop");
  return (
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
  );
};
export const ErrorModal = ({ onClose, title, message }) => {
  //takes 2 arguments
  //first - a component to render
  //second - pointer to the container where it should be rendered
  return (
    <>
      {createPortal(
        <Backdrop onClose={onClose} />,
        document.getElementById("backdrop-root")
      )}
      {createPortal(
        <ModalBody title={title} onClose={onClose} message={message} />,
        document.getElementById("modal-root")
      )}
    </>
  );
};
