import React from 'react';
import './App.css';
import TodoListHeader from './TodoListHeader';
import TodoListTasks from './TodoListTasks';
import TodoListFooter from './TodoListFooter';

class App extends React.Component {
  
  state = {
    tasks: [
      {id: "1", title: "JS", isDone: false, priority: "priority: medium"},
      {id: "2", title: "CSS", isDone: true, priority: "priority: low"},
      {id: "3", title: "React", isDone: false, priority: "priority: high"},
      {id: "4", title: "SaSS", isDone: true, priority: "priority: medium"},
      {id: "5", title: "Redux", isDone: false, priority: "priority: high"}
    ],
    filterValue: "All"
  };
  
  addTask = (newTitle) => {
    let newTask = {
      id: this.state.tasks.length + 1,
      title: newTitle,
      isDone: false,
      priority: "priority: low"
    };
    let newTasks = [...this.state.tasks, newTask];
    this.setState({
      tasks: newTasks
    })
  };
  
  changeFilter = (newFilterValue) => {
    this.setState({
      filterValue: newFilterValue
    })
  };
  
  changeStatus = (task, isDone) => {
    let newTasks = this.state.tasks.map(t => {
      if (t !== task) {
        return t;
      } else {
        return {...t, isDone: isDone}
      }
    });
    this.setState({
      tasks: newTasks
    });
  };
  
  render = () => {
    
    let filteredTasks = this.state.tasks.filter(t => {
      if (this.state.filterValue === 'All') {
        return true;
      }
      if (this.state.filterValue === 'Completed') {
        return t.isDone === true;
      }
      if (this.state.filterValue === 'Active') {
        return t.isDone === false;
      }
    });
    
    return (
      <div className="App">
        <div className="todoList">
          <TodoListHeader addTask={this.addTask}/>
          <TodoListTasks
            changeStatus={this.changeStatus}
            tasks={filteredTasks}/>
          <TodoListFooter
            filterValue={this.state.filterValue}
            changeFilter={this.changeFilter}
          />
        </div>
      </div>
    );
  };
}

export default App;