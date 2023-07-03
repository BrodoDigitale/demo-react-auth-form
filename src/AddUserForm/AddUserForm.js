import React, { useRef } from "react";
import classes from "./AddUserForm.module.css";
import { Card } from "../UI/Card/Card";
import { Button } from "../UI/Button/Button";

export const AddUserForm = ({ addUserHandler, errorHandler }) => {
  const nameInputRef = useRef();
  const ageInputRef = useRef();

  const submitHandler = (evt) => {
    evt.preventDefault();
    const enteredUsername = nameInputRef.current.value;
    const enteredAge = ageInputRef.current.value;
    if (enteredUsername.trim().length < 3 || !enteredAge || +enteredAge < 1) {
      return errorHandler();
    }
    addUserHandler({ name: enteredUsername, age: enteredAge });
    nameInputRef.current.value = "";
    ageInputRef.current.value = "";
  };

  return (
    <Card extraClasses={classes.input}>
      <form onSubmit={submitHandler}>
        <label htmlFor="username">Username</label>
        <input id="username" type="text" ref={nameInputRef} />
        <label htmlFor="age">Age (Years)</label>
        <input id="age" type="number" ref={ageInputRef} />
        <Button type={"submit"}>Add user</Button>
      </form>
    </Card>
  );
};
