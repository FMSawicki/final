import React, { Component } from "react";
import ReactDOM from "react-dom";
import logo from "./logo.png";
import "./App.css";
import Output from "./Output/Output";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { inputText: "", apiResponse: [] };
    this.handleInput = this.handleInput.bind(this);
  }
  // componentDidMount() {
  // }
  handleInput = () => {
    var cors_api_url = "https://cors-anywhere.herokuapp.com/";
    var anagramica_api_url = `http://www.anagramica.com/best/:${
      this.state.inputText
    }`;
    fetch(cors_api_url + anagramica_api_url)
      .then(function(response) {
        return response.json();
      })
      .then(function(myJson) {
        console.log(JSON.stringify(myJson));
        // console.log(myJson);
      });
  };
  onChange = e => {
    this.setState({ inputText: e.target.value });
  };
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          {/* <p>Technically not true anagrams, but I liked the name!</p> */}
        </header>
        <form>
          <textarea
            id="inputText"
            onChange={this.onChange}
            type="text"
            cols="30"
            rows="3"
          />
          <input type="button" value="Submit" onClick={this.handleInput} />
        </form>
        <Output />
      </div>
    );
  }
}

export default App;
