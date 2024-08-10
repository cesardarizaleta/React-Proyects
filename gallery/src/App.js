import './App.css';
import React from 'react'
import Photo from './photo'
import { useEffect } from 'react';

function App() {

  useEffect(() => {
    document.querySelectorAll('img').forEach(img => {
      img.src = img.src + `?random=${Math.random()}`;
    });
    document.querySelectorAll('.bento-square').forEach(square => {
      square.style.width = (Math.random() + .2) * 20 + 'em'
      square.onmouseover = () => {
        square.style.width = parseInt(square.style.width.replace('em','')) + 5 + 'em'
      }
      square.onmouseout = () => {
        square.style.width = parseInt(square.style.width.replace('em','')) - 5 + 'em'
      }
    })
    document.querySelectorAll('.bento-square')[0].style.width = '20em'
  })

  return (
    <div className="App">
      <main className='bento-square'>
        <h1>Gallery</h1>
        <p>Using BentoUI</p>
      </main>
      <Photo />
      <Photo />
      <Photo />
      <Photo />
      <Photo />
      <Photo />
      <Photo />
      <Photo />
      <Photo />
      <Photo />
      <Photo />
      <Photo />
      <Photo />
    </div>
  );
}

export default App;
