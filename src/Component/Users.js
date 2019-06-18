import React, { Component } from "react";

class Users extends Component {
  render() {
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
        <p>{uniqueID}</p>
        <p>{firstname}</p>
        <p>{lastname}</p>
        <p>{address}</p>
        <p>{birthDate}</p>
        <p>{message}</p>
      </div>
    );
  }
}

export default Users;
