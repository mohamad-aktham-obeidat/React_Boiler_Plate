import React, { Component } from 'react';
import TasksList from './components/TasksList';
import Item from './components/Item';

export default class App extends Component {
  state = {
  };

  render() {
    return (
      <>
        <h1>Main Compnent</h1>
        <TasksList />
        <Item />
      </ >
    );
  }
}
