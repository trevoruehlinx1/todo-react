import React, { Component } from 'react';
import Task from './Task';

class TaskList extends Component{
    
    render () {
        const { tasks } = this.props;
        return(
            <div className='container' >
                <ul>
                    {tasks.map((task,index) => 
                    <Task 
                        task={task}
                        key={index}
                        index={index}
                        toggleTaskStatus={this.props.toggleTaskStatus }
                        deleteTask={this.props.deleteTask } 
                        isComplete={task.isComplete}
                    />)}
                </ul>
            </div>
        );
    }
}
export default TaskList;