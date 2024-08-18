import React from 'react';
import { Opulento } from "uvcanvas"
import './App.css';
import Main from './components/main';


const App = () => {
  return (
    <div className="h-screen">
        <Opulento />
        <Main />
    </div>
  );
}

export default App;