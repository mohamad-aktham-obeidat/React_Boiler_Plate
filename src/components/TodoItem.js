import React, { Component } from 'react';

export default class TodoItem extends Component {
  toggleComplete = (e) => {
    console.log(e.target.checked)
    
  }
  render() {
    const { title, isCompleted } = this.props.task;
    
    return (
      <React.Fragment>
        {/* <h6>TodoItem</h6> */}
        <p style={{
          textDecoration: (isCompleted) ? 'line-through' : 'none'
        }}>
          <input checked ={isCompleted} type="checkbox" onChange={this.props.toggleCompleteState.bind(this, this.props.task.id)} />
          {title}</p>

      </React.Fragment>
    );
  }
}

// line-through
// checked={isCompleted}