import React, { Component } from 'react';
import Todos from './components/Todos';
import AddNewTask from './components/AddNewTask';

export default class App extends Component {
  
  constructor(newTask){
    super()
    this.newTask =newTask;
    this.newId=this.state.tasks.length;
  }
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

  handleChange = (e) =>{
         this.newTask = e.target.value;
        // return newTask;
        
        console.log(this.newTask);
        
  }
  handleClick = () =>{
    this.newId++;
    let obj = {id: this.newId, title:this.newTask}
    this.setState({tasks:[...this.state.tasks, obj]})
  }

  render() {
    const { tasks } = this.state;
    return (
      <React.Fragment>
        <AddNewTask handleChange={this.handleChange} handleClick={this.handleClick}/>
        <Todos tasks={tasks} toggleCompleteState={this.toggleCompleteState} />
      </React.Fragment >
    );
  }
}