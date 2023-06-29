import React, { useState } from "react";
import { AddUserForm } from "./AddUserForm/AddUserForm";
import { ErrorModal } from "./ErrorModal/ErrorModal";
import { UsersList } from "./UsersList/UsersList";

function App() {
  const [users, setUsers] = useState([]);
  const [showErrrorModal, setShowErrorModal] = useState(false);
  //

  const addUserHandler = (newUser) => {
    setUsers((prevState) => [...prevState, newUser]);
    console.log(users);
  };

  const invalidInputHandler = () => {
    setShowErrorModal(true);
  };

  const closeErrorModal = () => {
    setShowErrorModal(false);
  };

  return (
    <div>
      <AddUserForm
        addUserHandler={addUserHandler}
        errorHandler={invalidInputHandler}
      />
      <UsersList users={users} />
      {showErrrorModal && <ErrorModal onClose={closeErrorModal} />}
    </div>
  );
}

export default App;
