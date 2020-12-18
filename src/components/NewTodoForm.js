import React, { Component } from "react";
import { v4 as uuid } from "uuid";
export default class NewTodoForm extends Component {
  constructor(props) {
    super(props);
    this.state = { task: "" };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleChange(evt) {
    this.setState({
      [evt.target.name]: evt.target.value,
    });
  }
  handleSubmit(evt) {
    evt.preventDefault();
    this.props.createTodo({ ...this.state, id: uuid() });
    this.setState({
      task: "",
    });
    evt.target.reset();
  }
  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <label htmlFor="task">New Todo</label>
          <input
            type="text"
            placeholder="New Todo"
            id="task"
            name="task"
            onChange={this.handleChange}
          />
          <button>Add Todo</button>
        </form>
      </div>
    );
  }
}
