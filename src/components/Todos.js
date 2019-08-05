import React, { Component } from 'react';
import TodoItem from './TodoItem';
import AddNewTask from './AddNewTask';
export default class Todos extends Component {
  render() {
    const { tasks } = this.props;
    return (
      <React.Fragment>
        <AddNewTask />
        {tasks.map((elem, i) => <TodoItem key={i} task={elem} toggleCompleteState ={this.props.toggleCompleteState}/>)}
      </React.Fragment>
    );
  }
}
