import React, { useEffect, useState } from "react";
import "./ChatFeed";

export default props => {
  const [isConnected, setConnected] = useState(false);
  const [connection, setConnection] = useState({});
  const [message, setMessage] = useState({ body: "" });
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
    console.log(message.body);
    if (message.body.length !== 0) {
      connection.invoke("sendmessage", message);
      setMessage("");
    }
  };

  const setCurrentMessage = e => {
    setMessage({ name: props.name, body: e.target.value });
  };

  if (isConnected) {
    return (
      <div className="chatFeedInstace">
        <ul class="collection">
          {messages.map(message => {
            return (
              <li key={Math.random()} class="collection-item">
                {message.name} : {message.body}
              </li>
            );
          })}
        </ul>

        <div className="chatInput">
          <input onChange={setCurrentMessage} />
          <a onClick={sendMessage} class="waves-effect waves-light btn">
            Send
          </a>
        </div>
      </div>
    );
  } else {
    return <h3>Connecting...</h3>;
  }
};
