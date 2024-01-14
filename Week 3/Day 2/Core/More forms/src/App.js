import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';

import Form from './components/Form';

function App() {

    const [state, setState] = useState({
        firstName: '',
        lastName: '',
        email: '',
        password: '',
        confirmPassword: ''
    });


    return (
        <div className="App bg-light">
            <div className ="row justify-content-center">
                <div className="col-4">
                    <Form inputs={state} setInputs={setState}></Form>
                </div>
            </div>
        </div>
    );
}

export default App;