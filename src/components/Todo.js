import React, { Component } from "react";

export default class Todo extends Component {
  render() {
    return (
      <div>
        <button>Edit</button>
        <button onClick={this.props.deleteTodo}>X</button>
        <li>{this.props.task}</li>
      </div>
    );
  }
}
