import React, { Component } from "react";

export default class Todo extends Component {
  constructor(props) {
    super(props);
    this.handleDelete = this.handleDelete.bind(this);
  }
  handleDelete() {
    this.props.deleteTodo(this.props.id);
  }
  render() {
    return (
      <div>
        <button>Edit</button>
        <button onClick={this.handleDelete}>X</button>
        <li>{this.props.task}</li>
      </div>
    );
  }
}
