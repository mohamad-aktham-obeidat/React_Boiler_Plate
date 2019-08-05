import React, { Component } from 'react';
import TodoItem from './TodoItem';
export default class Todos extends Component {
  render() {
    const { tasks } = this.props;
    return (
      <div style={{marginTop:'5%'}}>
        <br/>
        {tasks.map((elem, i) => <TodoItem key={i} task={elem} toggleCompleteState ={this.props.toggleCompleteState}/>)}
      </div>
    );
  }
}
