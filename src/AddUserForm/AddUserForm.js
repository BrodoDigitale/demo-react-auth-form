import React, { useState } from "react";
import classes from "./AddUserForm.module.css";
import { Card } from "../UI/Card/Card";
import { Button } from "../UI/Button/Button";

export const AddUserForm = (props) => {
  const [userData, setUserData] = useState(null);

  const addUserHandler = (evt) => {
    evt.preventDefault();
  };
  const onChangeHandler = (input, value) => {
    setUserData((prevState) => {
      return { ...prevState, [input]: value };
    });
    console.log(userData);
  };
  return (
    <Card extraClasses={classes.input}>
      <form onSubmit={addUserHandler}>
        <label htmlFor="username">Username</label>
        <input
          id="username"
          type="text"
          onChange={(evt) => onChangeHandler("username", evt.target.value)}
        />
        <label htmlFor="age">Age (Years)</label>
        <input
          id="age"
          type="number"
          onChange={(evt) => onChangeHandler("age", evt.target.value)}
        />
        <Button type={"submit"}>Add user</Button>
      </form>
    </Card>
  );
};
