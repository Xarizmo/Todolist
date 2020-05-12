import React from 'react';

class AddNewItemForm extends React.Component {
  
  state = {
    error: false,
    title: ''
  }
  
  onAddItemClick = () => {
    let newTitle = this.state.title.trim();
    
    if (newTitle === ""){
      this.setState({error: true})
    } else {
      this.props.addItem(newTitle);
      this.setState({
        error: false,
        title: ""
      })
    }
  };
  
  onTitleChanged = (e) => {
    this.setState({
      error: false,
      title: e.currentTarget.value
    })
  }
  
  onKeyPress = (e) => {
    if (e.key === "Enter") {
      this.onAddItemClick();
    }
  }
  
  render = () => {
    let errorClass = this.state.error ? "error" : "";
    
    return (
      <div className="todoList-newTaskForm">
        <input
          className={errorClass}
          type="text"
          placeholder="New item name"
          onChange={this.onTitleChanged}
          onKeyPress={this.onKeyPress}
          value={this.state.title}
        />
        <button onClick={this.onAddItemClick}>Add</button>
      </div>
    );
  }
}

export default AddNewItemForm;