import React, { Component } from "react";
import "./App.css";
import UserProfile from "./components/UserProfile";
import UserContext from "./contexts/UserContext";

class App extends Component {
  constructor(props) {
    super(props);

    // create method toggleStatus that will change the status value from true to false. keep in mind that this method has to be created before our state!
    this.toggleStatus = () => {
    const newStatus = !this.state.status;
    this.setState({ status: newStatus });
    };
  // create 2 properties for state: status (boolean) and toggle (toggleStatus method previously created)
    this.state = {
    status:true,
    toggleStatus:this.toggleStatus
  };
  }
 
  // pass the whole state to the provider as a value
  render() {
    return (
      <UserContext.Provider value={this.state}>
      <UserProfile />
      </UserContext.Provider>
    );
  }
}

export default App;

