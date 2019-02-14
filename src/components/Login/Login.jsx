import React, { useState, useRef } from "react";
import "./Login.css";
export default props => {
  const userName = useRef();
  const password = useRef();
  const handleLogin = () => {
    if (
      userName.current.value.length > 5 &&
      password.current.value.length > 5
    ) {
      console.log("ok");
    } else {
      console.log("not");
    }
  };
  return (
    <div className="loginContainer ">
      <input type="text" placeholder="Your login" ref={userName} />
      <input type="password" placeholder="Password" ref={password} />
      <a onClick={handleLogin} class="waves-effect waves-light btn">
        Login
      </a>
    </div>
  );
};
