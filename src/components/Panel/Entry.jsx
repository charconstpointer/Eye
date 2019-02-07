import React, { Component } from "react";

export default class Entry extends Component {
  render() {
    return (
      <div>
        <h5>Nick</h5>
        <input type="text" name="nick" id="nickInput" />
        <button>Connect</button>
      </div>
    );
  }
}
