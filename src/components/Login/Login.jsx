import React, { useState, useRef } from "react";
import Validator from "../../utils/validation";
import { UserProvider, UserConsumer } from "../../contexts/UserContext";

import "./Login.css";

export default props => {
  const userName = useRef();
  const password = useRef();
  const handleLogin = () => {
    if (
      Validator.validateUsername(userName.current.value) &&
      Validator.validatePassword(password.current.value)
    ) {
      console.log("gud");
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
