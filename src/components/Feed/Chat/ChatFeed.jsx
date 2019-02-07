import React, { Component } from "react";

export default class ChatFeed extends Component {
  state = {
    messages: []
  };
  componentDidMount() {
    this.signalR = require("@aspnet/signalr");
    this.connection = new this.signalR.HubConnectionBuilder()
      .withUrl("http://localhost:5000/chat")
      .build();
    this.connection.on("receiveMessage", message => {
      this.setState(prevState => ({
        messages: [...prevState.messages, message]
      }));
      console.log(this.state.messages);
    });
    this.connection
      .start()
      .then(() => {
        this.connection.invoke("joinroom", "1");
      })
      .catch(err => console.error(err));
    console.log(this.connection);
  }
  render() {
    if (this.state.messages.length === 0) {
      return (
        <div>
          <h3>no msgs</h3>
        </div>
      );
    } else {
      return (
        <div>
          {this.state.messages.map(message => {
            return <h5 key={Math.random()}>{message}</h5>;
          })}
        </div>
      );
    }
  }
}
