import React, { Component } from 'react';

class Task extends Component{
toggleTask()
{
  this.props.toggleTaskStatus(this.props.index);
}

    render(){
        const task = this.props.task;
        const toggleTaskStatus = this.props.toggleTaskStatus;
        const onDeleteTask = this.onDeleteTask.bind(this);
        const isComplete = this.props.isComplete;
        console.log(isComplete);
        return(
          <li className="list-group-item checkbox">
            <div className="row">
              <div className="col-md-1 col-xs-1 col-lg-1 col-sm-1 checkbox">
                <label><input id="toggleTaskStatus" type="checkbox" onChange={this.toggleTask.bind(this)} checked={(isComplete?'checked':'')}  /></label>
              </div>
              <div className={"col-md-10 col-xs-10 col-lg-10 col-sm-10 task-text "+ (isComplete?'complete':'')}>
                {task.task}
              </div>
              <div className="col-md-1 col-xs-1 col-lg-1 col-sm-1 delete-icon-area">
                <a className="" href="/" onClick={onDeleteTask} > <i id="deleteTask" data-id="{index}" className="delete-icon glyphicon glyphicon-trash"></i></a>
              </div>
            </div>
          </li>
        )
    }
   onDeleteTask(event) {
      event.preventDefault();
      const deleteTask = this.props.deleteTask;
      let index = this.props.index;
      deleteTask(index);
    }
}
export default Task;