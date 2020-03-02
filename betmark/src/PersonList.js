import React, { Component } from "react";
import axios from "axios";

export default class PersonList extends React.Component {
  state = {
    persons: []
  };

  componentDidMount() {
    axios.get("https://jsonbox.io/box_949fa3732ab425e926a5/Users").then(res => {
      console.log(res.data);
      this.setState({ persons: res.data });
    });
  }

  render() {
    return (
      <table>
        <tbody>
          {this.state.persons.map(person => (
            <tr key={person._id}>
              <td>{person.FirstName}</td>
              <td>{person.LastName}</td>
              <td>{person.ID}</td>
              <td>{person._id}</td>
            </tr>
          ))}
        </tbody>
      </table>
    );
  }
}
