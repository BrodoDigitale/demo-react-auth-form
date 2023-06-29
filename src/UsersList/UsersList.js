import React from "react";
import classes from "./UsersList.module.css";
import { Card } from "../UI/Card/Card";

export const UsersList = ({ users }) => {
  return (
    <Card extraClasses={classes.users}>
      <ul>
        {users &&
          users.map((user, index) => {
            return (
              <li key={index}>
                {user.name} ({user.age} years old)
              </li>
            );
          })}
      </ul>
    </Card>
  );
};
