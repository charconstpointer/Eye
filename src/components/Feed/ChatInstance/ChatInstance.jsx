import React, { useEffect, useState, useRef } from "react";
import "../Chat/ChatFeed.css";

export default props => {
  const [isConnected, setConnected] = useState(false);
  const [connection, setConnection] = useState({});
  const [message, setMessage] = useState({ body: "" });
  const [messages, setMessages] = useState([]);
  const messageInput = useRef();
  const signalR = require("@aspnet/signalr");
  const token =
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiI3Y2MwMTgwMi04NmExLTQ3OWEtODQwOS0xYmRkYzNjZDYxYzciLCJ1bmlxdWVfbmFtZSI6IjdjYzAxODAyLTg2YTEtNDc5YS04NDA5LTFiZGRjM2NkNjFjNyIsImp0aSI6IjJkYmM1N2MwLTIxMWUtNGQ0Mi1hOGU0LWY0N2U5Y2ZkZGRkMSIsImlhdCI6IjE1NTEwODU2NjMwOTQiLCJodHRwOi8vc2NoZW1hcy5taWNyb3NvZnQuY29tL3dzLzIwMDgvMDYvaWRlbnRpdHkvY2xhaW1zL3JvbGUiOiJhZG1pbiIsIm5iZiI6MTU1MTA4NTY2MywiZXhwIjoxNTUxMDkyMzIzLCJpc3MiOiJleG9uZSJ9.pPHMAWEcq9zARp0fIy6RcgLoYLTS8z1zD7VW_60Styg";
  //164
  useEffect(() => {
    let chatrConnection = new signalR.HubConnectionBuilder()
      .withUrl(props.address, {
        accessTokenFactory: () => token
      })
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

  const omegalul = () => {
    console.log("");
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
                <h4 onClick={omegalul}>
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
