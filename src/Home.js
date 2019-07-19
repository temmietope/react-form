import React from "react";
import Header from "./Component/Header";
import Form from "./Component/Form";

const Home = () => {
  return (
    <div className="App">
      <div className="wrapper">
        <Header />
        <Form/>
      </div>
      
    </div>
  );
};

// class App extends Component {
//   state = {
//     users: []
//   };
//   addUser = user => {
//     this.setState({ users: [...this.state.users, user] }, () => {
//       console.log(this.state.users);
//     });
//   };
//   render() {
//     return (
//       <Router>
//         <div className="App">
//           <div className="wrapper">
//             <Header />
//             <Route
//               exact
//               path="/"
//               render={props => (
//                 <React.Fragment>
//                   <Form addUser={this.addUser} />
//                 </React.Fragment>
//               )}
//             />
//             <Route
//               path="/users-list"
//               render={props => (
//                 <React.Fragment>
//                   <Userslist userslist={this.state.users} />
//                 </React.Fragment>
//               )}
//             />
//           </div>
//         </div>
//       </Router>
//     );
//   }
// }

export default Home;
