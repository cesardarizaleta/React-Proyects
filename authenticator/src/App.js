import React, { useEffect } from 'react';
import './App.css';
import Login from './components/login';
import Register from './components/register';
import { Lumiflex } from "uvcanvas"

const App = () => {

  useEffect(() => {
    document.title = "Authenticator";
    document.querySelector('#login-content button:last-child').addEventListener('click', () => {
      alert('Register button clicked');
    })
  }, []);


  return (
    <div className="h-screen flex">
      <Login />
      <Register />
      <Lumiflex />
    </div>
  );
}

export default App;