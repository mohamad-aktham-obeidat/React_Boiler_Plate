import React, { Component } from 'react';

export default class TodoItem extends Component {
  toggleComplete = (e) => {
    console.log(e.target.checked)
    
  }
  render() {
    const {id, title, isCompleted} = this.props.task;
    
    return (
      <div style={{margin:'20px'}}>
        <p style={{ textDecoration: (isCompleted) ? 'line-through' : 'none', display:'inline'}}>
          <input checked ={isCompleted} type="checkbox" onChange={this.props.toggleCompleteState.bind(this, id)} />{title}
        </p>
        <button className='btn-danger' style={{display:'inline', position:'absolute', right:'20px', margin:'8px', padding:'6px'}}>Remove Task</button> <br/>
      </div>
    );
  }
}

