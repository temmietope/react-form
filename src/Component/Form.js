import React, { useState } from "react";
import { rand } from "../utils/random";
import { withRouter } from "react-router-dom";

const Form = props => {
  const [register, setRegister] = useState({
    firstname: "",
    lastname: "",
    address: "",
    birthDate: "",
    message: ""
  });
  const [users, setUsers] = useState([]);
  const onChange = e => {
    setRegister({
      ...register,
      [e.target.name]: e.target.value
    });
  };
  const onSubmit = e => {
    const { firstname, lastname, address, birthDate, message } = register;
    e.preventDefault();
    console.log(register);
    const user = {
      firstname,
      lastname,
      address,
      birthDate,
      message,
      uniqueID: rand()
    };
    const newUsers = [...users, user];
    setUsers(newUsers);
  };
  const onClick = e => {
    props.history.push({ pathname: "/users-list", state: users });
  };
  return (
    <>
      <form
        onSubmit={e => {
          onSubmit(e);
        }}
      >
        <div
          className="form"
          style={{
            display: "flex",
            flexFlow: "column",
            justifyContent: "center",
            alignItems: "center"
          }}
        >
          <div className="signup" style={{ textAlign: "center" }}>
            <h2>Sign up for free</h2>
          </div>

          <div className="userName">
            <h4>
              Name: <span style={{ color: "red" }}>*</span>
            </h4>
            <input
              type="text"
              name="firstname"
              placeholder="Firstname"
              onChange={e => {
                onChange(e);
              }}
            />
            <input
              type="text"
              name="lastname"
              placeholder="Lastname"
              onChange={e => {
                onChange(e);
              }}
            />
          </div>
          <div className="userAddress">
            <h4>
              Address: <span style={{ color: "red" }}>*</span>
            </h4>
            <input
              type="text"
              name="address"
              placeholder="Your address"
              onChange={e => {
                onChange(e);
              }}
            />
          </div>
          <div className="userBirthDate">
            <h4>
              Date of Birth: <span style={{ color: "red" }}>*</span>
            </h4>
            <input
              type="text"
              name="birthDate"
              placeholder="dd/mm"
              onChange={e => {
                onChange(e);
              }}
            />
          </div>
          <div className="message">
            <h4>
              Favorite Quote: <span style={{ color: "red" }}>*</span>
            </h4>
            <input
              type="text"
              name="message"
              placeholder="Your favorite quote"
              style={{ height: "50px" }}
              onChange={e => {
                onChange(e);
              }}
            />
          </div>
          <div className="submit">
            <input type="submit" value="Submit" className="btn" />
          </div>
          <div className="check users" style={{ marginTop: "30px" }}>
            <button
              onClick={e => {
                onClick(e);
              }}
              style={{ color: "green", border: "black 1px solid" }}
            >
              Click here to check UsersList
            </button>
          </div>
        </div>
      </form>
    </>
  );
};

export default withRouter(Form);
