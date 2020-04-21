import React from 'react';
import PropTypes from 'prop-types';

export default function TodoListTask(props) {
  
  let onIsDoneChanged = (e) => {
    props.changeStatus(props.task, e.currentTarget.checked)
  };
  
  return (
      <div className="todoList-task">
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