import React from 'react';
import './App.css';
import TodoListHeader from './TodoListHeader';
import TodoListTasks from './TodoListTasks';
import TodoListFooter from './TodoListFooter';

class App extends React.Component {
  
  state = {
    tasks: [
      // {id: "1", title: "JS", isDone: false, priority: "priority: medium"},
      // {id: "2", title: "CSS", isDone: true, priority: "priority: low"},
      // {id: "3", title: "React", isDone: false, priority: "priority: high"},
      // {id: "4", title: "SaSS", isDone: true, priority: "priority: medium"},
      // {id: "5", title: "Redux", isDone: false, priority: "priority: high"}
    ],
    filterValue: "All"
  };
  
  nextTaskId = 1;
  
  saveState = () => {
    let stateAsString = JSON.stringify(this.state);
    localStorage.setItem("state", stateAsString);
  }
  
  restoreState = () => {
    let state = {
      tasks: [],
      filterValue: "All"
    };
    let stateAsString = localStorage.getItem("state");
    if (stateAsString) {
      state = JSON.parse(stateAsString);
    }
    this.setState(state, () => {
      this.state.tasks.forEach(t => {
        if (t.id >= this.nextTaskId) {
          this.nextTaskId = t.id + 1
        }
      })
    });
  }
  
  componentDidMount() {
    this.restoreState();
  }
  
  addTask = (newTitle) => {
    let newTask = {
      id: this.nextTaskId,
      title: newTitle,
      isDone: false,
      priority: "priority: low"
    };
    this.nextTaskId++;
    let newTasks = [...this.state.tasks, newTask];
    this.setState({tasks: newTasks}, this.saveState)
  };
  
  changeFilter = (newFilterValue) => {
    this.setState({
      filterValue: newFilterValue
    })
  };
  
  changeTask = (taskId, obj) => {
    let newTasks = this.state.tasks.map(t => {
      if (t.id === taskId) {
        return {...t, ...obj}
      }
      return t;
    })
    this.setState({tasks: newTasks}, this.saveState)
  }
  changeStatus = (taskId, isDone) => {
    this.changeTask(taskId, {isDone: isDone})
  };
  
  changeTaskTitle = (taskId, title) => {
    this.changeTask(taskId, {title: title})
  };
  
  
  render = () => {
    
    let filteredTasks = this.state.tasks.filter(t => {
      switch (this.state.filterValue) {
        case "Active":
          return !t.isDone;
        case "Completed":
          return t.isDone;
        case "All":
          return true;
        default:
          return true;
      }
    });
    
    return (
      
      <div className="App">
        <div className="todoList">
          <TodoListHeader addTask={this.addTask}/>
          <TodoListTasks
            tasks={filteredTasks}
            changeStatus={this.changeStatus}
            changeTaskTitle={this.changeTaskTitle}
          />
          <TodoListFooter
            filterValue={this.state.filterValue}
            changeFilter={this.changeFilter}
          />
        </div>
      </div>
    )
      ;
  };
}

export default App;