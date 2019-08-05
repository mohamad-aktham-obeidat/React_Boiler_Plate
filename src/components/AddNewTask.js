import React from 'react';

class AddNewTask extends React.Component{

   

    render(){
        const {handleChange, handleClick} = this.props;
        return(
            <div style={{position:'absolute', top:'20px', left:'40%'}}>
                <input style={{padding:'6px'}} type='text' placeholder='Add New Task Here...' onChange={handleChange}></input>
                <button className='btn-primary' style={{marginLeft:'6px', padding:'6px'}} onClick={handleClick}>Add Task</button>
            </div>
        );
    }
}

export default AddNewTask;