import React, { Component } from "react";

export default class Entry extends Component {
  state = {
    nick: "",
    isNickValid: false
  };
  enterChat = () => {
    if (this.state.isNickValid) this.props.onEntry(this.state.nick);
  };
  nickChanged = e => {
    if (e.target.value.length > 3) {
      this.setState({
        nick: e.target.value,
        isNickValid: true
      });
      console.log("valid");
    } else {
      this.setState({
        isNickValid: false
      });
    }
  };
  render() {
    return (
      <div>
        <h5>Nick</h5>
        <input
          onChange={this.nickChanged}
          type="text"
          name="nick"
          id="nickInput"
        />
        <button onClick={this.enterChat}>Connect</button>
      </div>
    );
  }
}
