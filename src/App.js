import React, { Component } from "react";
import "./App.css";
import Todos from "./components/Todos";
import Header from './components/layout/Header'
class App extends Component {
  state = {
    todos: [
      {
        id: 1,
        title: "Learn JavaScript 1",
        completed: false,
      },
      {
        id: 2,
        title: "Learn JavaScript 2",
        completed: false,
      },
      {
        id: 3,
        title: "Learn JavaScript 3",
        completed: false,
      },
      {
        id: 4,
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
    this.setState({ todos: [...this.state.todos.filter(todo => todo.id !== id)]});
  }

  render() {
    return (
      <div>
        <Header />
        <Todos todos={this.state.todos} markComplete={this.markComplete} delTodo={this.delTodo}/>{" "}
        {/* we our todos in our state and we are passing it to the Todos component as a prop  */}
      </div>
    );
  }
}

export default App;
