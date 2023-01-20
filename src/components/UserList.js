import React, { useState } from "react";

function UserList({ userList, handleEditUser, handleDeleteUser }) {
  return (
    <section>
      <h3 className="p-3 text-center">Users</h3>
      <table
        className="table table-striped table-bordered"
        data-testid="userListTable"
      >
        <thead>
          <tr>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Phone Number</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {userList.map((user, index) => (
            <tr key={index}>
              <td>{user.firstName}</td>
              <td>{user.lastName}</td>
              <td>{user.phone}</td>
              <td>
                <button
                  type="button"
                  onClick={() => handleEditUser(user)}
                >
                  Edit
                                </button>
                <button
                  type="button"
                  onClick={() => handleDeleteUser(user)}
                >
                  Delete
                                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </section>
  );
}

export default UserList;
