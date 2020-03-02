import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";

class Header extends Component {
  render() {
    return (
      <header className="App-header">
        <h1 className="App-title">{this.props.title}</h1>
      </header>
    );
  }
}
class Body extends Component {
  render() {
    return <div>testing</div>;
  }
}

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header title={"Betmark"} />
        <Body />
      </div>
    );
  }
}

export default App;
