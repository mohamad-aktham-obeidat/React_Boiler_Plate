import React, { Component } from 'react';
import Todos from './components/Todos';

export default class App extends Component {
  state = {
    tasks: [
      {
        id: 1,
        title: "Download Zoom",
        isCompleted: false
      },
      {
        id: 2,
        title: "Eat Fried Chicken",
        isCompleted: true
      },
      {
        id: 3,
        title: "Play Games",
        isCompleted: false
      },
      {
        id: 4,
        title: "Go for Shopping",
        isCompleted: false
      },
      {
        id: 5,
        title: "Watch Movie",
        isCompleted: false
      }
    ]
  };
  // changeData = () => {
  //   this.setState({ data: 'Alice Zaheer' });
  // }

  toggleCompleteState = (id) =>{
    console.log(id)
    this.setState({
      tasks: this.state.tasks.map(task => {
        if(task.id === id)
          task.isCompleted = !task.isCompleted;
        return task;
      })
    })
    
  }
  render() {
    const { tasks } = this.state;
    return (
      <React.Fragment>
        <h6>App</h6>
        <Todos tasks={tasks} toggleCompleteState={this.toggleCompleteState} />
      </React.Fragment >
    );
  }
}