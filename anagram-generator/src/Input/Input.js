import React, { Component } from "react";
import "./Input.css";
// creates input window and functions, passes to generator
class Input extends Component {
  render() {
    return (
      <div classname="inputMain">
        <p classname="inputText">Input your text here</p>
      </div>
    );
  }
}

export default Input;
