import React, { Component } from "react";

export default class ChatFeed extends Component {
  state = {
    messages: [],
    rooms: []
  };
  componentDidMount = () => {
    this.signalR = require("@aspnet/signalr");
    this.connection = new this.signalR.HubConnectionBuilder()
      .withUrl(this.props.address)
      .build();
    this.connection.on("receiveMessage", message => {
      this.setState(prevState => ({
        messages: [...prevState.messages, message]
      }));
    });
    this.connection
      .start()
      .then(() => {
        let roomName = "default";
        this.connection.invoke("joinroom", this.state.nick, roomName);
        this.setState(prev => ({
          connected: true,
          rooms: [...prev.rooms, roomName]
        }));
      })
      .catch(err => console.error(err));
  };

  onConnect = nick => {
    this.setState(prevState => ({
      ...prevState,
      nick: nick
    }));
  };
  render() {
    if (!this.state.connected) {
      return <h3>connecting...</h3>;
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
