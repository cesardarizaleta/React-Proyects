import './App.css';
import React from 'react';
import Btn from './components/btn';

function App() {
  return (
    <div className="App">
        <div className="calculator">
          <input></input>
          <div className="btns">
            <Btn number="1"/>
            <Btn number="2"/>
            <Btn number="3"/>
            <Btn number="4"/>
            <Btn number="5"/>
            <Btn number="6"/>
            <Btn number="7"/>
            <Btn number="8"/>
            <Btn number="9"/>
            <Btn number="0"/>
            <Btn number="C"/>
            <Btn number="+"/>
            <Btn number="-"/>
            <Btn number="*"/>
            <Btn number="/"/>
            <Btn number="="/>
          </div>
        </div>
    </div>
  );
}

export default App;
