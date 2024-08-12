import './App.css';
import React, { useEffect } from 'react';
import Btn from './components/btn';

function App() {


  const handleClick = () => {
    const btns = document.querySelectorAll('.btns button');

    btns.forEach(btn => {
      btn.addEventListener('click', () => {
        const input = document.querySelector('input');
        if(btn.textContent === 'C') {
          input.value = '';
          return
        }
        if(input.value === 'NaN' || input.value === 'Infinity') {
          input.value = '';
        }
        if(input.value[input.value.length - 1] === '+' || input.value[input.value.length - 1] === '-' || input.value[input.value.length - 1] === '*' || input.value[input.value.length - 1] === '/' || input.value === '') {
          return
        }
        if(btn.textContent === '=' && input.value !== '') {
          input.value = eval(input.value)
          return
        }
        input.value = input.value + btn.textContent;
      })
    })
  }



  useEffect(handleClick);

  return (
    <div className="App">
        <div className="calculator">
          <input readOnly></input>
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
