import React from "react";

const Users = () => {
  const {
    uniqueID,
    firstname,
    lastname,
    address,
    birthDate,
    message
  } = this.props.user;
  return (
    <div>
      <h3>USER UNIQUE ID: {uniqueID}</h3>
      <p>Firstname: {firstname}</p>
      <p>Lastname: {lastname}</p>
      <p>Address: {address}</p>
      <p>Date of Birth: {birthDate}</p>
      <p>Favorite Quote: {message}</p>
    </div>
  );
};

export default Users;
