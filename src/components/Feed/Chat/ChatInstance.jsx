import React, { useEffect, useState } from "react";

export default props => {
  const [isConnected, setConnected] = useState(false);
  const [connection, setConnection] = useState({});
  const [message, setMessage] = useState();
  const [messages, setMessages] = useState([]);
  const signalR = require("@aspnet/signalr");

  useEffect(() => {
    let chatrConnection = new signalR.HubConnectionBuilder()
      .withUrl(props.address)
      .build();
    chatrConnection.on("receiveMessage", message => {
      console.log("mess", message);

      setMessages(prevMessages => [
        ...prevMessages,
        {
          name: message.name,
          body: message.body
        }
      ]);
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

  const sendMessage = () => {
    connection.invoke("sendmessage", message);
    setMessage("");
  };

  const setCurrentMessage = e => {
    setMessage({ name: props.name, body: e.target.value });
  };

  if (isConnected) {
    return (
      <div className="chatFeed">
        {messages.map(message => {
          return (
            <h3 key={message}>
              {message.name} > {message.body}
            </h3>
          );
        })}
        <div className="chatInput">
          <input onChange={setCurrentMessage} />
          <button onClick={sendMessage}>Send</button>
        </div>
      </div>
    );
  } else {
    return <h3>Connecting...</h3>;
  }
};
