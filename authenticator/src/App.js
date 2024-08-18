import React from 'react';
import './App.css';
import Login from './components/login';
import { Lumiflex } from "uvcanvas"

const App = () => {
  return (
    <div className="h-screen flex">
      <Login />
      <Lumiflex />
    </div>
  );
}

export default App;