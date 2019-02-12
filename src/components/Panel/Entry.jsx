import React from "react";
import "./Entry.css";

export default props => {
  const [name, setName] = React.useState();
  const [address, setAddress] = React.useState();

  const nameChangeHandler = e => {
    setName(e.target.value);
  };

  const addressChangeHandler = e => {
    setAddress(e.target.value);
  };

  const connectToServerHandler = () => {
    alert(name + "\n" + address);
  };

  if (address) {
    return (
      <div className="login">
        <input onChange={nameChangeHandler} className="nameInput" type="text" />
        <input
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
        <p>nice</p>
      </div>
    );
  }
};
