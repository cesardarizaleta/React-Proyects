import './App.css';
import React from 'react'
import Photo from './photo'
import { useEffect } from 'react';

function App() {

  return (
    <div className="App">
      <main className='bento-square'>
        <h1>Gallery</h1>
        <p>Using BentoUI</p>
      </main>
      <Photo />
    </div>
  );
}

export default App;
