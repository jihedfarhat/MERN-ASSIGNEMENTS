import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';

import Form from './components/Form';
import Results from './components/Results';

function App() {

	// We destructure useState function into "state" and "setState" variables using destructuring notation for dictionaries
	const [state, setState] = useState({
		firstName: '',
		lastName: '',
		email: '',
		password: '',
		cofirmPassword: ''
	});

	return (
		<div className="App bg-light">
			<div className ="row justify-content-center">
				<div className="col-4">
					<Form inputs={state} setInputs={setState}></Form>
					
				</div>
				<div className="col-4">
					<Results data={state}></Results>
				</div>
			</div>
		</div>
	);
}

export default App;