import React, { useEffect, useState } from "react";

const REGEX_PATTERN = {
  regexMobileNumber: /^[1-9]{1}[0-9]{9}$/,
};

function AddEditUser({ editingUser, handleAddUser }) {
  const initialState = { firstName: "", lastName: "", phone: "" };
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [phone, setPhone] = useState("");
  const [invalidForm, setInvalidForm] = useState(false);
  const [editing, setEditing] = useState(false);

  useEffect(() => {
    if (editingUser.firstName) {
      setFirstName(editingUser.firstName);
      setLastName(editingUser.lastName);
      setPhone(editingUser.phone);
      setEditing(true);
    }
  }, [editingUser]);

  const submitForm = (event) => {
    event.preventDefault();
    if (!phone || !firstName || !lastName) {
      setInvalidForm(true);
      return;
    } else if (phone.length !== 10 || phone.charAt(0) === "0") {
      setInvalidForm(true);
      return;
    } else if (
      firstName === null ||
      firstName === undefined ||
      firstName === ""
    ) {
      setInvalidForm(true);
      return;
    } else if (
      lastName === null ||
      lastName === undefined ||
      lastName === ""
    ) {
      setInvalidForm(true);
      return;
    }

    // pass back value to App
    const newUser = {
      firstName: firstName,
      lastName: lastName,
      phone: phone,
    };

    setFirstName("");
    setLastName("");
    setPhone("");
    setInvalidForm(false);
    setEditing(false)
    handleAddUser(newUser);
  };

  const handleCancelButton = () => {
    // need to handle edit also
    if (!editing) {
      setFirstName("");
      setLastName("");
      setPhone("");
      setInvalidForm(false);
    } else {
      setFirstName("");
      setLastName("");
      setPhone("");
      setInvalidForm(false);
      setEditing(false)
      handleAddUser(editingUser);
    }
  };

  return (
    <section>
      <div className="pa-30">
        <form onSubmit={submitForm} noValidate="noValidate">
          <div className="layout-column mb-15">
            <label htmlFor="firstName" className="mb-3">
              First Name
                        </label>
            <input
              type="text"
              placeholder="Enter first name"
              name="firstName"
              required
              data-testid="firstNameInput"
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
            />
          </div>
          <div className="layout-column mb-15">
            <label htmlFor="lastName" className="mb-3">
              Last Name
                        </label>
            <input
              type="text"
              placeholder="Enter last name"
              name="lastName"
              required
              data-testid="lastNameInput"
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
            />
          </div>
          <div className="layout-column mb-15">
            <label htmlFor="phone" className="mb-3">
              Phone Number
                        </label>
            <input
              type="number"
              placeholder="Enter phone number"
              name="phone"
              required
              data-testid="phoneInput"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
            />
          </div>

          {invalidForm && (
            <div
              className="alert error mb-30"
              data-testid="validationAlert"
            >
              Error: All fields are mandatory. And phone number to
              be of 10 digits.
            </div>
          )}

          <div className="layout-row justify-content-end">
            <button
              type="button"
              className=""
              data-testid="cancelEditUserButton"
              onClick={() => handleCancelButton()}
            >
              Cancel
                        </button>
            <button
              type="submit"
              className="mx-0"
              data-testid="addEditButton"
            >
              Add/Edit User
                        </button>
          </div>
        </form>
      </div>
    </section>
  );
}

export default AddEditUser;
