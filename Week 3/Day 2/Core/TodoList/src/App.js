import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';

import Input from './components/Input';
import Task from './components/Task';


function App() {

    const [taskList, setTaskList] = useState([]);



    return (
        <div className="App bg-light text-left">
            <div className="container p-3">
                <h2>Todo List</h2>
                <div className="w-50">
                    <h4>Add a new task:</h4>
                    <Input taskList={taskList} setTaskList={setTaskList} ></Input>
                
                    <h4>List of current tasks:</h4>
                    
                    { taskList.map((task,i) => 
                        <Task key={i} index = {i} taskList={taskList} setTaskList={setTaskList} ></Task>
                    )}
                    
                </div>
            </div>
        </div>
    );
}

export default App;