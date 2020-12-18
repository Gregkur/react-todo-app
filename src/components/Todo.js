import React, { Component } from "react";

export default class Todo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isEditing: false,
    };
    this.handleDelete = this.handleDelete.bind(this);
    this.toggleForm = this.toggleForm.bind(this);
  }
  handleDelete() {
    this.props.deleteTodo(this.props.id);
  }
  toggleForm() {
    this.setState({ isEditing: !this.state.isEditing });
  }
  render() {
    let result;
    if (this.state.isEditing) {
      result = (
        <div>
          <form>
            <input type="text" />
            <button>Save</button>
          </form>
        </div>
      );
    } else {
      result = (
        <div>
          <button onClick={this.toggleForm}>Edit</button>
          <button onClick={this.handleDelete}>X</button>
          <li>{this.props.task}</li>
        </div>
      );
    }
    return result;
  }
}
