import React, { useState } from "react";
import { AddUserForm } from "./AddUserForm/AddUserForm";
import { ErrorModal } from "./ErrorModal/ErrorModal";
import { UsersList } from "./UsersList/UsersList";

function App() {
  const [users, setUsers] = useState([]);
  const [showErrrorModal, setShowErrorModal] = useState(false);

  const addUserHandler = (newUser) => {
    setUsers((prevState) => [...prevState, newUser]);
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
      {users.length && <UsersList users={users} />}
      {showErrrorModal && (
        <ErrorModal
          onClose={closeErrorModal}
          title={"Error"}
          message={"Invalid input"}
        />
      )}
    </div>
  );
}

export default App;
