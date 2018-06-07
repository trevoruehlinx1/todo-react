import React, { Component } from 'react';
import './App.css';
import TaskList from './Components/TaskList';
import TaskForm from './Components/TaskForm';

class App extends Component {
  constructor(props){
    super(props);
    let tasks = [];
    if(!localStorage.getItem('TASKS')) {
      tasks = [
            {task: 'Go to Dentist', isComplete: false},
            {task: 'Do Gardening', isComplete: true},
            {task: 'Renew Library Account', isComplete: false},
          ];
    }
    else
      tasks = JSON.parse(localStorage.getItem('TASKS'));
    this.state = {
      task: "",
      tasks:tasks,
      isComplete:false
    };
    this.deleteTask = this.deleteTask.bind(this);
    this.toggleTaskStatus = this.toggleTaskStatus.bind(this);
    this.addTask = this.addTask.bind(this);
  }
  render() {
    localStorage.setItem('TASKS', JSON.stringify(this.state.tasks));
    return (
      <div className="App">
      The App
        <TaskForm onSubmit= {this.addTask} />
        <TaskList tasks= {this.state.tasks} deleteTask={this.deleteTask.bind(this)} toggleTaskStatus={this.toggleTaskStatus.bind(this)}/>
      </div>
    );
  }

deleteTask(taskIndex) {
  console.log("on delete task");
  let tasks = JSON.parse(JSON.stringify(this.state.tasks));
  tasks.splice(taskIndex, 1);
  this.setState({tasks});
}
  toggleTaskStatus(index) {
    console.log(index);
    let tasks = JSON.parse(JSON.stringify(this.state.tasks));
    tasks[index].isComplete = !tasks[index].isComplete;
    this.setState({tasks:tasks});
  }


  addTask(task) {
    console.log("add task");
    const tasks = this.state.tasks;
    let newTask = {
      task,
      isComplete: false,
    };
    //let parentDiv = document.getElementById('addTask').parentElement;
    //if(task === '') {
      //parentDiv.classList.add('has-error');
    //} else {
      //parentDiv.classList.remove('has-error');
      tasks.push(newTask);
      this.setState(tasks);
    //}
}
}

export default App;
