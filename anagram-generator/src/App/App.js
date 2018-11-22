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
  handleInput = () => {
    var result = [];
    var index = "";
    var cors_api_url = "https://cors-anywhere.herokuapp.com/";
    var anagramica_api_url = `http://www.anagramica.com/best/:${
      this.state.inputText
    }`;
    //assigns cors-anywhere url and api url to variables to fix cors error
    fetch(cors_api_url + anagramica_api_url)
      .then(response => response.json())
      .then(myJson => (result = myJson.best))
      //stores array recieved from api in variable
      .then(result => {
        index = result.indexOf(`${this.state.inputText}`);
        result.splice(index, 1);
        //since the recieved array includes the word sent in the fetch request, this finds the index of that word in the array and removes it. I used splice to avoid leaving a hole in the array.
        this.setState({ apiResponse: result });
      })
      .catch(error => console.error(error));
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
