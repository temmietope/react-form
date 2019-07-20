import React, { useEffect } from "react";
import Users from "./Users";
import { Link } from "react-router-dom";

const Userslist = props => {
  useEffect(() => {
    console.log(props);
  });
  const { state } = props.location;
  return (
    <>
      <h2>List of Subscribers</h2>
      <Link to="/">Back to form</Link>
      {state.map(user => {
        return <Users key={user.uniqueID} user={user} />;
      })}
    </>
  );
};

export default Userslist;
