import React, { Component } from "react";
import "./App.css";
import ChatFeed from "./components/Feed/Chat/ChatFeed";

class App extends Component {
  render() {
    return (
      <div className="App">
        <ChatFeed />
      </div>
    );
  }
}

export default App;
