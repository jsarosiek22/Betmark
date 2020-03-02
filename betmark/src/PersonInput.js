import React from "react";
import axios from "axios";

export default class PersonInput extends React.Component {
  state = {
    FirstName: ""
  };

  handleChange = event => {
    this.setState({ FirstName: event.target.value });
  };

  handleSubmit = event => {
    event.preventDefault();
    const Users = {
      FirstName: this.state.FirstName
    };
    axios
      .post("https://jsonbox.io/box_949fa3732ab425e926a5/Users", {
        FirstName: Users.FirstName
      })
      .then(res => {
        console.log(res);
        console.log(res.data);
      });
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label>
          Person Name:
          <input type="text" name="FirstName" onChange={this.handleChange} />
        </label>
        <button type="submit">ADD</button>
      </form>
    );
  }
}
