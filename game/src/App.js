import './App.css';
import React from 'react';
import { useEffect } from 'react';

function App() {

  useEffect(() => {

    const palabras = ['APPLE', 'BRAVO', 'CHART', 'DELTA', 'EAGLE', 'FANCY', 'GHOST', 'HAPPY', 'IGLOO', 'JOKER', 'KAPPA', 'LEMON', 'MANGO', 'NANCY', 'OPERA', 'PIZZA', 'QUICK', 'RABIT', 'SNAKE', 'TIGER', 'UNION', 'VEXER', 'WHALE', 'XENON', 'YACHT', 'ZEBRA'];
    const word = palabras[Math.floor(Math.random() * palabras.length)];


    const letters = word.split('');

    const inputs = document.querySelectorAll('input');
    const hangman = document.getElementById('hangman');
    const parts = hangman.querySelectorAll('div');
    var lives = 6;

    for (let i = 0; i < parts.length; i++) {
      parts[i].style.display = 'none';
    }

    inputs.forEach((input, index) => {
      input.addEventListener('input', (e) => {
        input.value = input.value.toUpperCase();
        if (input.value.length > 1) {
          input.value = input.value[0];
        }
        if (input.value === letters[index]) {
          input.style.color = 'green';
          input.style.border = '2px solid green';
        } 
        
        else {
          input.style.color = 'red';
          input.style.border = '2px solid red';
          parts[index].style.display = 'block';
          lives--;
          if(lives === 0){
            alert('Game Over');
          }
        }
      });
    })

    if(inputs.length < letters.length){
      for(let i = inputs.length; i < letters.length; i++){
        const input = document.createElement('input');
        input.setAttribute('maxlength', '1');
        input.classList.add('outline-none', 'uppercase', 'w-10', 'focus:w-12', 'h-10', 'text-center', 'transition-all', 'duration-500');
        hangman.appendChild(input); 
      }
    }
    

  }, []);

  return (
    <main id="App" className="h-screen w-screen bg-center bg-cover flex flex-col justify-center
    items-center gap-6">
      <div className="w-fit h-16 rounded-lg bg-white overflow-hidden p-6 flex gap-2 justify-center items-center">
        <input maxlength='1' className="outline-none uppercase w-10 focus:w-12 h-10 text-center transition-all duration-500"></input>
        <input maxlength='1' className="outline-none uppercase w-10 focus:w-12 h-10 text-center transition-all duration-500"></input>
        <input maxlength='1' className="outline-none uppercase w-10 focus:w-12 h-10 text-center transition-all duration-500"></input>
        <input maxlength='1' className="outline-none uppercase w-10 focus:w-12 h-10 text-center transition-all duration-500"></input>
        <input maxlength='1' className="outline-none uppercase w-10 focus:w-12 h-10 text-center transition-all duration-500"></input>
        <input maxlength='1' className="outline-none uppercase w-10 focus:w-12 h-10 text-center transition-all duration-500"></input>
      </div>

      <div id='hangman' className='h-3/4 bg-white w-80 rounded-lg relative'>

        <div id="head" className='w-40 bg-blue-400 h-40 rounded-full absolute none'></div>
        <div id='body' className='w-5 rounded-full bg-blue-400 h-72 absolute'></div>
        <div id='leg-1' className='w-5 rounded-full bg-blue-400 h-32 absolute'></div>
        <div id='leg-2' className='w-5 rounded-full bg-blue-400 h-32 absolute'></div>
        <div id='arm-1' className='w-5 rounded-full bg-blue-400 h-32 absolute'></div>
        <div id='arm-2' className='w-5 rounded-full bg-blue-400 h-32 absolute'></div>

      </div>
    </main>
  );
}

export default App;
