import React, { useEffect, useState } from "react";

export default props => {
  const [isConnected, setConnected] = useState(false);
  const [connection, setConnection] = useState({});
  const [messages, setMessages] = useState([]);
  const signalR = require("@aspnet/signalr");
  useEffect(() => {
    let chatrConnection = new signalR.HubConnectionBuilder()
      .withUrl(props.address)
      .build();
    chatrConnection.on("receiveMessage", message => {
      setMessages(prevMessages => [...prevMessages, message]);
    });
    chatrConnection
      .start()
      .then(() => {
        setConnected(true);
        chatrConnection.invoke("joinRoom", props.name, "default");
      })
      .catch(err => console.error(err));
    setConnection(chatrConnection);
  }, {});
  if (isConnected) {
    return (
      <div className="chatFeed">
        {messages.map(message => {
          return <h3 key={message}>{message}</h3>;
        })}
      </div>
    );
  } else {
    return <h3>Connecting...</h3>;
  }
};
