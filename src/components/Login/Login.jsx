import React, { useState, useRef } from "react";
import Validator from "../../utils/validation";
import axios from "axios";

import "./Login.css";

export default props => {
  const userName = useRef();
  const password = useRef();
  const handleLogin = () => {
    if (
      Validator.validateUsername(userName.current.value) &&
      // Validator.validatePassword(password.current.value)
      true
    ) {
      let data = JSON.stringify({
        name: "fuark",
        password: "mushroom"
      });
      axios
        .post("https://localhost:44326/api/accounts/auth", data, {
          headers: { "Content-Type": "application/json; charset=utf-8" }
        })
        .then(res => {
          const token = res.data.token;
          axios
            .get("https://localhost:44326/api/values/", {
              headers: { Authorization: `Bearer ${token}` }
            })
            .then(res => console.log(res));
        })
        .catch(err => console.error(err));
      console.log(data);
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
