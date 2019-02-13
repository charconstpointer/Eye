import React from "react";
import "./Entry.css";
import ChatInstance from "../../ChatInstance/ChatInstance";

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

        <a
          onClick={connectToServerHandler}
          class="waves-effect waves-light btn"
        >
          Connect
        </a>
      </div>
    );
  } else {
    return (
      <div className="container">
        <ChatInstance name={name} address={address} />
      </div>
    );
  }
};
