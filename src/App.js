import React from 'react';
import './App.css';
import TodoListHeader from './TodoListHeader';
import TodoListTasks from './TodoListTasks';
import TodoListFooter from './TodoListFooter';

class App extends React.Component {
    tasks = [
      {title: "JS", isDone: false, priority: "priority: medium"},
      {title: "CSS", isDone: true, priority: "priority: low"},
      {title: "React", isDone: false, priority: "priority: high"},
      {title: "SaSS", isDone: true, priority: "priority: medium"},
      {title: "Redux", isDone: false, priority: "priority: high"}
    ];
    
    filterValue = "Completed";
  
    render = () => {
        
        return (
            <div className="App">
                <div className="todoList">
                    <TodoListHeader />
                    <TodoListTasks tasks={this.tasks}/>
                    <TodoListFooter filterValue={this.filterValue}/>
                </div>
            </div>
        );
    };
}

export default App;