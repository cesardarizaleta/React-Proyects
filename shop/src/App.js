import './App.css';
import { Tranquiluxe } from "uvcanvas"
import React from 'react';
import { MdOutlineShoppingCart } from "react-icons/md";

function App() {
  return (
    <div id='app' className="w-screen h-screen">
      <Tranquiluxe className="" />
      <div id='marco' className='absolute top-0 left-0 w-screen h-screen'>
        <main className='relative w-full h-full'>
          <div className='absolute top-0 right-0 w-fit p-4 bg-black text-center text-8xl cursor-pointer transition-all'>
            <h1 className='text-white font-bold'>BYTE</h1>
          </div>
            <button id='btn-gobuy' className='absolute bottom-0 left-0 flex items-center w-1/4 p-4
             justify-center gap-3 text-black text-xl transition-all'>
              <MdOutlineShoppingCart className='w-8 h-8' color='black' />Go buy!
              </button>
        </main>
      </div>
    </div>
  );
}

export default App;
