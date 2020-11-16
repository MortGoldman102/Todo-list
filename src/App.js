import React, { Component } from "react";
import "./App.css";
import Todos from "./components/Todos";
import Header from "./components/layout/Header";
import AddTodo from "./components/AddTodo";
import { v4 as uuidv4 } from "uuid";
class App extends Component {
  state = {
    todos: [
      {
        id: uuidv4(),
        title: "Learn JavaScript 1",
        completed: false,
      },
      {
        id: uuidv4(),
        title: "Learn JavaScript 2",
        completed: false,
      },
      {
        id: uuidv4(),
        title: "Learn JavaScript 3",
        completed: false,
      },
      {
        id: uuidv4(),
        title: "Learn JavaScript 4",
        completed: false,
      },
    ],
  };
  // this will Toggle complete
  markComplete = (id) => {
    this.setState({
      todos: this.state.todos.map((todo) => {
        if (todo.id === id) {
          todo.completed = !todo.completed;
        }
        return todo;
      }),
    });
  };

  // Delete Todo
  delTodo = (id) => {
    this.setState({
      todos: [...this.state.todos.filter((todo) => todo.id !== id)],
    });
  };

  //Add Todo
  addTodo = (title) => {
    const newTodo = {
      id: uuidv4(),
      title: title,
      completed: false,
    };
    this.setState({ todos: [...this.state.todos, newTodo] });
  };

  render() {
    return (
      <div className="App">
        <div className="container">
          <Header />
          <AddTodo addTodo={this.addTodo} />
          <Todos
            todos={this.state.todos}
            markComplete={this.markComplete}
            delTodo={this.delTodo}
          />{" "}
          {/* we use todos in our state and we are passing it to the Todos component as a prop  */}
        </div>
      </div>
    );
  }
}

export default App;
