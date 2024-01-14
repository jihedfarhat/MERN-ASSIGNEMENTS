import React from 'react';
import logo from './logo.svg';
import './App.css';

import PersonCard from './components/PersonCard';

function App() {
  return (
    <div className="App">
      <div className ="row justify-content-center">
			<div className ="col-4">
				<PersonCard firstName = {"Jane"} lastName = {"Doe"} age = {45} hairColor = {"Black"} />
				<PersonCard firstName = {"John"} lastName = {"Smith"} age = {88} hairColor = {"Brown"} />

			</div>
		</div>
    </div>
  );
}

export default App;