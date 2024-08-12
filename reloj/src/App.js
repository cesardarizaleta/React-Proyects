import React from 'react'
import './App.css';
import Pais from './components/pais'

function App() {
  return (
    <div className="App">
      <div className='leftside'>
        <div className='card'>
          <h1>Reloj</h1>
          <h3 id='subtitle'>Diferentes ciudades</h3>
        </div>
        <Pais pais="Mexico" />
        <Pais pais="Paris" />
      </div>

    </div>
  );
}

export default App;
