import './App.css';
import React from 'react';
import { useEffect } from 'react';

function App() {

  useEffect(() => {

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

        <div id="head" className='w-40 bg-blue-400 h-40 rounded-full absolute'></div>
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
