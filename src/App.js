import React, { Component } from "react";
import "./App.css";
import Chat from "./components/Feed/Chat/EntryPanel/Entry";
import Navigation from "./components/Navigation/Navigation";
// import Login from "./components/Login/Login";

class App extends Component {
  render() {
    return (
      <div className="App">
        {/* <Login /> */}
        <Navigation />
        {/* <Chat /> */}
      </div>
    );
  }
}

export default App;
