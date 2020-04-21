import React from 'react';

class TodoListFooter extends React.Component {
  render = () => {
    
    const { changeFilter, filterValue } = this.props;
    
    let classForAll = filterValue === "All" ? "filter-active" : "";
    let classForCompleted = filterValue === "Completed" ? "filter-active" : "";
    let classForActive = filterValue === "Active" ? "filter-active" : "";
    
    return (
      <div className="todoList-footer">
        <button
          className={classForAll}
          onClick={() => {
            changeFilter('All')
          }}
        >All
        </button>
        <button
          className={classForCompleted}
          onClick={() => {
            changeFilter('Completed')
          }}
        >Completed
        </button>
        <button
          className={classForActive}
          onClick={() => {
            changeFilter('Active')
          }}
        >Active
        </button>
      </div>
    );
  }
}

export default TodoListFooter;