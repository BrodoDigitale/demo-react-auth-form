import React from "react";
import "./AddUserForm.module.css";

export const AddUserForm = (props) => {
  return (
    <form>
      <div className={AddUserForm.input}>
        <label htmlFor="name">Enter user name</label>
        <input id="name" type="text" />
      </div>
      <div className={AddUserForm.input}>
        <label htmlFor="age">Enter age</label>
        <input id="age" type="number" />
      </div>
      <button type="submit" className="button">
        Enter
      </button>
    </form>
  );
};
