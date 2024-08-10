import './App.css';
import React from 'react'
import Photo from './photo'

function App() {
  return (
    <div className="App">
      <main className='bento-square'>
        <h1>Gallery</h1>
        <p>Using BentoUI</p>
        <Photo />
      </main>
    </div>
  );
}

export default App;
