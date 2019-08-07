import React, { Component } from 'react';
import Todos from './components/Todos';
import AddNewTask from './components/AddNewTask';
import axios from 'axios';
export default class App extends Component {
  
  constructor(){
    super()
    this.state = {tasks: []};
   
  }
  
  //@Method GET
  //Fetch All Tasks From Server To React App
  componentDidMount() {
    axios.get('/tasks')
      .then(tasks => {
        this.setState({
          tasks: tasks.data
        });
      })
      .catch(error => {
        console.log(error);
      });
  }

  //Change Complete Status When Checkbox Checked Or Not.
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

  //Get Input Value And Store It in Variable.
  handleChange = (e) =>{
         this.newTask = e.target.value;
        console.log(this.newTask);
  }

  //Add New Task Click Event To Add New Task 
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
        <Todos tasks={tasks} toggleCompleteState={this.toggleCompleteState }/>
      </React.Fragment >
    );
  }
}