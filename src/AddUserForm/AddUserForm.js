import React, { useState } from "react";
import classes from "./AddUserForm.module.css";
import { Card } from "../UI/Card/Card";
import { Button } from "../UI/Button/Button";

export const AddUserForm = (props) => {
  const [enteredUsername, setEnteredUsername] = useState("");
  const [enteredAge, setEnteredAge] = useState("");

  const addUserHandler = (evt) => {
    evt.preventDefault();
    console.log(enteredUsername, enteredAge);
  };

  return (
    <Card extraClasses={classes.input}>
      <form onSubmit={addUserHandler}>
        <label htmlFor="username">Username</label>
        <input
          id="username"
          type="text"
          onChange={(evt) => setEnteredUsername(evt.target.value)}
        />
        <label htmlFor="age">Age (Years)</label>
        <input
          id="age"
          type="number"
          onChange={(evt) => setEnteredAge(evt.target.value)}
        />
        <Button type={"submit"}>Add user</Button>
      </form>
    </Card>
  );
};
