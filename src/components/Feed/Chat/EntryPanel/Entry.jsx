import React from "react";
import "./Entry.css";
import ChatInstance from "../../ChatInstance/ChatInstance";
import validator from "../../../../utils/validation";

export default props => {
  const [name, setName] = React.useState();
  const [address, setAddress] = React.useState();
  const [isLogged, setLogged] = React.useState(false);
  const [areWeHumans, orAreWeDancers] = React.useState(true);

  const nameChangeHandler = e => {
    setName(e.target.value);
  };
  //change this
  const addressChangeHandler = e => {
    setAddress(e.target.value);
  };

  //
  const connectToServerHandler = () => {
    if (validator.validateHostAddress(address)) {
      setLogged(true);
    } else {
      console.log("wrong address format");
    }
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
