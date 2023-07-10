import React, { useState } from "react";
import logo from './logo.svg';
import './App.css';
import { Login } from './Components/login1';
import { Register } from '../src/Components/Register';


function App() {
  const [currentForm, setCurrentForm] = useState('login');

  const toggleform = (forName) => {
    setCurrentForm(forName);
  }
  return (
    <div className="App">
      {
        currentForm === "Login" ? <Login onFormSwitch={toggleform}/> : <Register onFormSwitch={toggleform}/>
      }
    </div>
  );
}

export default App;

{/* <header className="App-header">
  <img src={logo} className="App-logo" alt="logo" />
  <p>
    Edit <code>src/App.js</code> and save to reload.
  </p>
  <a
    className="App-link"
    href="https://reactjs.org"
    target="_blank"
    rel="noopener noreferrer"
  >
    Learn React
  </a>
</header> */}