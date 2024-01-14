import React, {useState} from 'react'

const Input = (props) => {
    
    const {taskList, setTaskList} = props
    const [taskName, setTaskName] = useState("")



    const inputHandler = (e) => {
        
        setTaskName(e.target.value);
    }

    const formHandler = (e) => {
        e.preventDefault();
        let newTask = {
            name: taskName,
            isComplete: false
        }
        setTaskList([...taskList,newTask]);
        setTaskName("");
    }


    return (
        <div className="my-3">

            <form onSubmit = { formHandler }>
            
                <div className="form-group">
                    <input type="text" className="form-control" onChange={ inputHandler } name="task" value={taskName}/>
                </div>
                <input type="submit" value="Submit" className="btn btn-primary"/>
            </form>
            
        </div>
    )
}

export default Input