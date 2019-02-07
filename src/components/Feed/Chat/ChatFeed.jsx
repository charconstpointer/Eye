import React, { Component } from "react";
import Entry from "../../Panel/Entry";

export default class ChatFeed extends Component {
  state = {
    messages: []
  };
  componentDidMount = () => {
    this.signalR = require("@aspnet/signalr");
    this.connection = new this.signalR.HubConnectionBuilder()
      .withUrl("http://localhost:5000/chat")
      .build();
    this.connection.on("receiveMessage", message => {
      this.setState(prevState => ({
        messages: [...prevState.messages, message]
      }));
    });
  };

  onConnect = nick => {
    this.setState(prevState => ({
      ...prevState,
      nick: nick
    }));

    this.connection
      .start()
      .then(() => {
        this.connection.invoke("joinroom", this.state.nick, "1");
        this.setState({
          connected: true
        });
        console.log("connected to room1");
      })
      .catch(err => console.error(err));
  };
  render() {
    if (!this.state.connected) {
      return <Entry onEntry={this.onConnect} />;
    } else {
      return (
        <div>
          {this.state.messages.map(message => {
            return <h3 key={Math.random()}>{message}</h3>;
          })}
        </div>
      );
    }
  }
}