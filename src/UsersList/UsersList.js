import React from "react";
import classes from "./UsersList.module.css";

export const UsersList = (props) => {
  return (
    <div className={classes.users}>
      <ul>
        {props.users &&
          props.users.map((user, index) => {
            return (
              <li key={index}>
                <p>{user.name}</p>
                <p>{user.age}</p>
              </li>
            );
          })}
      </ul>
    </div>
  );
};
