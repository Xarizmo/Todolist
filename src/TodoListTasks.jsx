import React from 'react';
import TodoListTask from "./TodoListTask";

export default function TodoListTasks(props) {
  
    let taskElements = props.tasks.map(task => {
      return (
        <TodoListTask
          key={task.id}
          task={task}
          changeStatus={props.changeStatus}
          changeTaskTitle={props.changeTaskTitle}
        />
      )
    });
    
    return (
      <div className="todoList-tasks">
        {taskElements}
      </div>
    );
}