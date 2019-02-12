import React from "react";
import "./Entry.css";
// import ChatFeed from "../Feed/Chat/ChatFeed";
import ChatInstance from "../Feed/Chat/ChatInstance";

export default props => {
  const [name, setName] = React.useState();
  const [address, setAddress] = React.useState();
  const [isLogged, setLogged] = React.useState(false);

  const nameChangeHandler = e => {
    setName(e.target.value);
  };

  const addressChangeHandler = e => {
    setAddress(e.target.value);
  };

  const connectToServerHandler = () => {
    setLogged(true);
  };

  if (!isLogged) {
    return (
      <div className="login">
        <input
          placeholder="Your name"
          onChange={nameChangeHandler}
          className="nameInput"
          type="text"
        />
        <input
          placeholder="Server address"
          onChange={addressChangeHandler}
          className="addressInput"
          type="text"
        />
        <button onClick={connectToServerHandler} className="connectButton">
          Connect
        </button>
      </div>
    );
  } else {
    return (
      <div>
        <ChatInstance name={name} address={address} />
        {/* <ChatFeed name={name} address={address} /> */}
      </div>
    );
  }
};
