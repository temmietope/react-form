import React, { Fragment, Component } from "react";
import Users from "./Users";
import { Link } from "react-router-dom";

class Userslist extends Component {
  render() {
    return (
      <Fragment>
       <h2>List of Subscribers</h2>
       <Link to="/">Back to form</Link>
        {this.props.userslist.map(user => {
          return <Users key={user.uniqueID} user={user} />;
        })}

         
      </Fragment>
    );
  }
}

export default Userslist;
