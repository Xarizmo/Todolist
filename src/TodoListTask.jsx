import React from 'react';
import PropTypes from 'prop-types';

export default class TodoListTask extends React.Component {
  state = {
    isEditMode: false
  };
  
  activatedEditMode = () => {
    this.setState({isEditMode: true})
  }
  
  deActivatedEditMode = () => {
    this.setState({isEditMode: false})
  }
  
  onIsDoneChanged = (e) => {
    this.props.changeStatus(this.props.task.id, e.currentTarget.checked)
  };
  
  onChangeTaskTitle = (e) => {
    this.props.changeTaskTitle(this.props.task.id, e.currentTarget.value)
  };
  
  render() {
    let taskIsDoneClass = this.props.task.isDone ? "todoList-task done" : "todoList-task";
    
    return (
      <div className={taskIsDoneClass}>
        <input
          type="checkbox"
          checked={this.props.task.isDone}
          onChange={this.onIsDoneChanged}
        />
        {this.state.isEditMode
          ? <>
              <span>{this.props.task.id}: </span>
              <input
                value={this.props.task.title}
                autoFocus={true}
                onBlur={this.deActivatedEditMode}
                onChange={this.onChangeTaskTitle}
              />
            </>
          : <span onClick={this.activatedEditMode}>{this.props.task.id}: {this.props.task.title}</span>
        }
        <span>- {this.props.task.priority}</span>
      </div>
    );
  }
  
}

TodoListTask.propTypes = {
  task: PropTypes.object,
  changeStatus: PropTypes.func
};