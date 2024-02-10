import './App.css';
import Persons from './components/Persons';

function App() {
  return (
    <div className="App">
      <Persons firstName = {"Jane"} lastName = {"Doe"} age = {45} hairColor = {"Black"}/>
      <Persons firstName = {"John"} lastName = {"Smith"} age = {88} hairColor = {"Brown"}/>
    </div>
  );
}

export default App;
