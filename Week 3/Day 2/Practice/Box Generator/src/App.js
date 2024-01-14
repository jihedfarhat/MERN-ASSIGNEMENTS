import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';

import Form from './components/Form';
import Box from './components/Box';


function App() {
  
    const [boxes, setBoxes] = useState([]);
  
    return (

        <div className="App bg-light">
            {/* Setting a grid system on Bootstrap to horizontally center the Form and Results components */}
			<div className ="row justify-content-center">
                <div className="col-4 p-4">
                    <Form inputs={boxes} setInputs={setBoxes}></Form>
                </div>
            </div>
            <div>
                { boxes.map((aBox,i) => 
                    <Box key={i} data={boxes[i]} ></Box>
                )}
            </div>
        </div>
    );
}

export default App;