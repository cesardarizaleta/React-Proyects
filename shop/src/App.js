import './App.css';
import { Tranquiluxe } from "uvcanvas"
import React from 'react';

function App() {
  return (
    <div id='app' className="w-screen h-screen">
      <Tranquiluxe className="" />
      <div id='marco' className='absolute top-0 left-0 w-screen h-screen'>
        <main className='relative w-full h-full'>
          <div className='absolute top-0 right-0 w-fit p-4 bg-black text-center text-8xl cursor-pointer transition-all'>
            <h1 className='text-white'>BYTE</h1>
          </div>
          <div className='absolute bottom-0 left-0 w-2/5 h-1/3 bg-black'>

          </div>
        </main>
      </div>
    </div>
  );
}

export default App;
