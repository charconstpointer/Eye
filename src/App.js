import React, { Component } from "react";
import "./App.css";
// import ChatFeed from "./components/Feed/Chat/ChatFeed";
import Lib from "./components/Feed/Chat/ChatInstance";

class App extends Component {
  render() {
    return (
      <div className="App">
        {/* <ChatFeed /> */}
        <Lib />
      </div>
    );
  }
}

export default App;
