import React, { Component } from "react";
import PersonList from "./PersonList";
import PersonInput from "./PersonInput";
import "./App.css";

const testdbURI = "https://jsonbox.io/box_949fa3732ab425e926a5";

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
    return <div>test</div>;
  }
}

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header title={"Betmark"} />
        <PersonInput />
        <PersonList />
        <Body />
      </div>
    );
  }
}

export default App;
