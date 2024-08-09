import React from 'react';
import './App.css';

function App() {

  function add() {
      const task = document.createElement('li');
      task.innerHTML = `
        <span>${document.querySelector('header input').value}</span>
        <button>Delete</button>
      `;
      const button = task.querySelector('button');
      button.addEventListener('click', function(e) {
        e.target.parentElement.remove();
      });
      document.querySelector('main ul').appendChild(task);
      document.querySelector('header input').value = '';
  }

  return (
    <div>
      <header>
        <h1>My To-Do List</h1>
        <div>
          <input type="text" placeholder="Enter a task" />
          <button onClick={add} type="submit">+</button>
        </div>
      </header>
      <main>
        <ul>

        </ul>
      </main>
    </div>
  );


}

export default App;
