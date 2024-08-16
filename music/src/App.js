import React from 'react';
import './App.css';
import File from './components/file.jsx';

//Amarillo: rgb(255, 250, 114)
//Azul-Morado: rgb(46, 5, 105)

const App = () => {

  //

  return (
    <div id='App' className="h-screen w-full">
      <div id='content' className='w-1/4 h-full p-7 flex flex-col gap-4'>
        <h1 className='text-3xl font-bold'>Music</h1>
        <div className='flex flex-col gap-2'>
          <div id='searchbar' className='flex justify-between'>
            <input className='bg-transparent outline-none' placeholder='Search song'></input>
            <button><svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24"><path fill="black" d="m19.6 21l-6.3-6.3q-.75.6-1.725.95T9.5 16q-2.725 0-4.612-1.888T3 9.5t1.888-4.612T9.5 3t4.613 1.888T16 9.5q0 1.1-.35 2.075T14.7 13.3l6.3 6.3zM9.5 14q1.875 0 3.188-1.312T14 9.5t-1.312-3.187T9.5 5T6.313 6.313T5 9.5t1.313 3.188T9.5 14"/></svg></button>
          </div>
          <File />
        </div>
        <ul className='h-1/2 p-4'>
        </ul> 
        <div>
          <h2 className='text-xl font-semibold'>Current Song</h2>
          <audio className='w-full' controls></audio>
        </div> 
      </div>
    </div>
  );
}

export default App;