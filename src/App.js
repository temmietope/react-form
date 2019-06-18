import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Header from "./Component/Header.js";
import Form from "./Component/Form.js";
import Userslist from "./Component/Userslist.js"

class App extends Component {
  state = {
    users: [],
  };
  addUser= (user)=>{
    this.setState({ users: [...this.state.users, user] },()=>{
      console.log(this.state.users)

    });
  }
  render() {
    return (
      <Router>
        <div className="App">
          <div className="wrapper">
            <Header />
            <Route
              exact
              path="/"
              render={props => (
                <React.Fragment>
                  <Form addUser={this.addUser}/>
                </React.Fragment>
              )}
            />
            <Route
              path="/users-list"
              render={props => (
                <React.Fragment>
                  <Userslist userslist={this.state.user}/>
                </React.Fragment>
              )}
            />
          </div>
        </div>
    </Router>
    );
  }
}

export default App;
