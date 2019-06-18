import React, { Component } from "react";
import { Link } from "react-router-dom";
import { rand } from "../utils/random";

class Form extends Component {
  state = {
    uniqueID: "",
    firstname: "",
    lastname: "",
    address: "",
    birthDate: "",
    message: ""
  };
  onChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };
  onSubmit = e => {
    e.preventDefault();
    const { firstname, lastname, address, birthDate, message } = this.state;
    if (
      !this.refs.firstname.value ||
      !this.refs.lastname.value ||
      !this.refs.address.value ||
      !this.refs.birthdate.value ||
      !this.refs.message.value
    ) {
      return alert("Fill all the required boxes");
    }

    const user = {
      firstname,
      lastname,
      address,
      birthDate,
      message,
      uniqueID: rand()
    };
    this.props.addUser(user);

    console.log(user);
    this.refs.firstname.value = "";
    this.refs.lastname.value = "";
    this.refs.address.value = "";
    this.refs.birthdate.value = "";
    this.refs.message.value = "";
  };
  render() {
    return (
      <form onSubmit={this.onSubmit}>
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
              ref="firstname"
              onChange={this.onChange}
            />
            <input
              type="text"
              name="lastname"
              placeholder="Lastname"
              ref="lastname"
              onChange={this.onChange}
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
              ref="address"
              onChange={this.onChange}
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
              ref="birthdate"
              onChange={this.onChange}
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
              ref="message"
              style={{ height: "50px" }}
              onChange={this.onChange}
            />
          </div>
          <div className="submit">
            <input type="submit" value="Submit" className="btn" />
          </div>
          <div className="check users" style={{ marginTop: "30px" }}>
            <Link
              to="/users-list"
              style={{ color: "green", textDecoration: "none" }}
            >
              Click here to check UsersList
            </Link>
          </div>
        </div>
      </form>
    );
  }
}

export default Form;
