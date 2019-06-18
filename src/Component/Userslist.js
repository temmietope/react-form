import React, {Fragment, Component } from "react";
import Users from "./Users"

class Userslist extends Component {
  render() {
    //   console.log(this.props.userslist)
   return(
        <Fragment>
             {this.props.userslist.map((user) => {
                 return <Users key={user.uniqueID} user={user}/>
        })}
        
        </Fragment>
    
       
    )
  }
}

export default Userslist;

