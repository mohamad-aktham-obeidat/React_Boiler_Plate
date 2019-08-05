import React from 'react';

class AddNewTask extends React.Component{

    render(){

        return(
            <React.Fragment>
                <input type='text' placeholder='Add New Task Here...'></input>
                <button className='btn btn-primary'>Add Task</button>
            </React.Fragment>
        );
    }
}

export default AddNewTask;