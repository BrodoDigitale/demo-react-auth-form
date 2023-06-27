import React from "react";
import classes from "./AddUserForm.module.css";
import { Card } from "../UI/Card/Card";
import { Button } from "../UI/Button/Button";

export const AddUserForm = (props) => {
  const addUserHandler = (evt) => {
    evt.preventDefault();
  };
  return (
    <Card extraClasses={classes.input}>
      <form onSubmit={addUserHandler}>
        <label htmlFor="username">Username</label>
        <input id="username" type="text" />
        <label htmlFor="age">Age (Years)</label>
        <input id="age" type="number" />
        <Button type={"submit"}>Add user</Button>
      </form>
    </Card>
  );
};
