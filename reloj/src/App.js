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
        <Pais pais="Madrid" />
        <Pais pais="New York" />
        <Pais pais="Tokyo" />
        <Pais pais="Los Angeles" />
        <Pais pais="Sao Paulo" />
        <Pais pais="Roma" />
        <Pais pais="Berlin" />
      </div>
    </div>
  );
}

export default App;
