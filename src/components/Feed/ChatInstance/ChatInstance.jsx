import React, { useEffect, useState, useRef } from "react";
import "../Chat/ChatFeed.css";

export default props => {
  const [isConnected, setConnected] = useState(false);
  const [connection, setConnection] = useState({});
  const [message, setMessage] = useState({ body: "" });
  const [messages, setMessages] = useState([]);
  const messageInput = useRef();
  const signalR = require("@aspnet/signalr");
  const couldItReallyBe = true;
  const fuckthishsit = true;

  useEffect(() => {
    let chatrConnection = new signalR.HubConnectionBuilder()
      .withUrl(props.address)
      .build();
    chatrConnection.on("receiveMessage", message => {
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
    if (message.body.length !== 0) {
      connection.invoke("sendmessage", message);
      setMessage({ ...message, body: "" });
      messageInput.current.value = "";
    }
  };

  const setCurrentMessage = e => {
    setMessage({ name: props.name, body: e.target.value });
  };

  if (isConnected) {
    return (
      <div className="chatFeed">
        <ul class="collection">
          {messages.map(message => {
            return (
              <li key={Math.random()} class="collection-item">
                <h4>
                  {message.name} : {message.body}
                </h4>
              </li>
            );
          })}
        </ul>
        <div className="chatInput">
          <input ref={messageInput} onChange={setCurrentMessage} />
          <a onClick={sendMessage} class="waves-effect  waves-light btn">
            Send
          </a>
        </div>
      </div>
    );
  } else {
    return <h3>Connecting...</h3>;
  }
};
