import React, { Component } from "react";
import NewTodoForm from "./NewTodoForm";
import Todo from "./Todo";

export default class TodoList extends Component {
  constructor(params) {
    super(params);
    this.state = {
      todos: [{ task: "Do the laundry" }, { task: "Feed the fish" }],
    };
  }
  render() {
    const todos = this.state.todos.map((todo) => {
      return <Todo task={todo.task} />;
    });
    return (
      <div>
        <h1>TodoList</h1>
        <NewTodoForm />
        <ul>{todos}</ul>
      </div>
    );
  }
}
