import React from 'react';
import PropTypes from 'prop-types';

export default function TodoListTask(props) {
  
  let onIsDoneChanged = (e) => {
    props.changeStatus(props.task, e.currentTarget.checked)
  };
  
  let taskIsDoneClass = props.task.isDone ? "todoList-task done" : "todoList-task";
  
  return (
      <div className={taskIsDoneClass}>
        <input
          type="checkbox"
          checked={props.task.isDone}
          onChange={onIsDoneChanged}
        />
        <span>{props.task.title}, {props.task.priority}</span>
      </div>
  );
}

TodoListTask.propTypes = {
  task: PropTypes.object,
  changeStatus: PropTypes.func
};