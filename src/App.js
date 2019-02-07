import React, { Component } from "react";
import "./App.css";
import ChatFeed from "./components/Feed/Chat/ChatFeed";
import Entry from "./components/Panel/Entry";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Entry />
        <ChatFeed />
      </div>
    );
  }
}

export default App;
