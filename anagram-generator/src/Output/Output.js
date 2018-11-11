import React, { Component } from "react";
import Generator from "../Generator/Generator";

// Creates window and displays generator output

class Output extends Component {
  rener() {
    return (
      <div classname="outputMain">
        <h5 classname="outputText">Text</h5>
        <Generator />
      </div>
    );
  }
}

export default Output;
