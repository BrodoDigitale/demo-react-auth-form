import React, { useState } from "react";
import { AddUserForm } from "./AddUserForm/AddUserForm";

function App() {
  const [users, setUsers] = useState([]);

  const addUserHandler = (newUser) => {
    setUsers((prevState) => [...prevState, newUser]);
    console.log(users);
  };
  return (
    <div>
      <AddUserForm addUserHandler={addUserHandler} />
    </div>
  );
}

export default App;
