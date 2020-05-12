import React from 'react';
import './App.css';

import TodoList from './TodoList'
import AddNewItemForm from "./AddNewItemForm";

class App extends React.Component {
  state = {
    todoLists: [
      // {id: 1, title: "JS"},
      // {id: 2, title: "GraphQL"},
      // {id: 3, title: "Redux"},
      // {id: 4, title: "TypeScript"}
    ]
  }
  
  nextTodoListId = 0;
  
  saveState = () => {
    let stateAsString = JSON.stringify(this.state);
    localStorage.setItem("our-todoLists-state", stateAsString);
  }
  
  restoreState = () => {
    let state = {
      todoLists: []
    };
    let stateAsString = localStorage.getItem("our-todoLists-state");
    if (stateAsString) {
      state = JSON.parse(stateAsString);
    }
    this.setState(state, () => {
      this.state.todoLists.forEach(t => {
        if (t.id >= this.nextTodoListId) {
          this.nextTodoListId = t.id + 1
        }
      })
    });
  }
  
  componentDidMount() {
    this.restoreState();
  }
  
  addTodoList = (newTitle) => {
    let newTodoList = {
      id: this.nextTodoListId,
      title: newTitle
    };
    this.nextTodoListId++;
    let newTodoLists = [...this.state.todoLists, newTodoList];
    this.setState({ todoLists: newTodoLists }, this.saveState)
  };
  
  render() {
    const todoLists = this.state.todoLists.map(tl => <TodoList key={tl.id} id={tl.id} title={tl.title} />)
    
    return (
      <>
        <div>
          <AddNewItemForm addItem={this.addTodoList} />
        </div>
        <div className="App">
          {todoLists}
        </div>
      </>
    )
  }
}

export default App;