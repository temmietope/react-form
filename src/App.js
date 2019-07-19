import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Home from "./Home";
import UsersList from "./Component/Userslist";

function App() {
  return (
    <div className="App">
      <Router>
        <>
          <Route exact path="/" component={Home} />
          <Route path="/users-list" component={UsersList} />
        </>
      </Router>
    </div>
  );
}

export default App;
