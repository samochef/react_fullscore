import React, { useState } from "react";
import "./App.css";
import "h8k-components";
import UserList from "./components/UserList";
import AddEditUser from "./components/AddEditUser";

const title = "User Management";

const App = () => {
  const initialState = { firstName: "", lastName: "", phone: "" };
  const [userList, setUserList] = useState([]);
  const [editingUser, setEditingUser] = useState({});

  const handleEditUser = (user) => {
    setEditingUser(user);
    setUserList(
      userList.filter(
        (curr) =>
          user.firstName !== curr.firstName &&
          user.lastName !== curr.lastName &&
          user.phone !== curr.phone
      )
    );
  };

  const handleAddUser = (user) => {
    if (user.firstName) {
      setUserList([...userList, user]);
    }
    setEditingUser({});
  };

  const handleDeleteUser = (user) => {
    setUserList(
      userList.filter(
        (curr) =>
          user.firstName !== curr.firstName &&
          user.lastName !== curr.lastName &&
          user.phone !== curr.phone
      )
    );
  };

  return (
    <div className="App">
      <h8k-navbar header={title}></h8k-navbar>
      <div className="layout-row justify-content-center mt-100">
        <div className="w-60 mr-75">
          <UserList
            userList={userList}
            handleDeleteUser={handleDeleteUser}
            handleEditUser={handleEditUser}
          />
        </div>
        <div className="layout-column w-40">
          <AddEditUser
            editingUser={editingUser}
            handleAddUser={handleAddUser}
          />
        </div>
      </div>
    </div>
  );
};

export default App;
