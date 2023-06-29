import React, { useState } from "react";
import classes from "./AddUserForm.module.css";
import { Card } from "../UI/Card/Card";
import { Button } from "../UI/Button/Button";

export const AddUserForm = ({ addUserHandler, errorHandler }) => {
  const [enteredUsername, setEnteredUsername] = useState("");
  const [enteredUsernameIsValid, setEnteredUsernameIsValid] = useState(false);
  const [enteredAgeIsValid, setEnteredAgeIsValid] = useState(false);
  const [enteredAge, setEnteredAge] = useState("");

  const submitHandler = (evt) => {
    evt.preventDefault();
    if (enteredUsernameIsValid && enteredAgeIsValid) {
      addUserHandler({ name: enteredUsername, age: enteredAge });
    } else {
      return errorHandler();
    }
    setEnteredUsername("");
    setEnteredAge("");
  };

  const nameInputHandler = (evt) => {
    const username = evt.target.value;
    setEnteredUsername(username);
    if (username.trim().length < 3) {
      setEnteredUsernameIsValid(false);
    } else {
      setEnteredUsernameIsValid(true);
    }
  };

  const ageInputHandler = (evt) => {
    const age = evt.target.value;
    setEnteredAge(age);
    if (!age || +age < 1) {
      setEnteredAgeIsValid(false);
    } else {
      setEnteredAgeIsValid(true);
    }
  };

  return (
    <Card extraClasses={classes.input}>
      <form onSubmit={submitHandler}>
        <label htmlFor="username">Username</label>
        <input
          id="username"
          type="text"
          value={enteredUsername}
          onChange={(evt) => nameInputHandler(evt)}
        />
        <label htmlFor="age">Age (Years)</label>
        <input
          id="age"
          type="number"
          value={enteredAge}
          onChange={(evt) => ageInputHandler(evt)}
        />
        <Button type={"submit"}>Add user</Button>
      </form>
    </Card>
  );
};
