import React, { useState } from "react";
// import { UserContext } from "../../../contexts/userContext";

const lib = (props, context) => {
  const [value, setValue] = useState("default");
  const handleFieldChange = e => {
    setValue(e.target.value);
  };
  return (
    <section>
      <input type="text" id="value" onChange={handleFieldChange} />
      <h3>{value}</h3>
    </section>
  );
};

export default lib;
