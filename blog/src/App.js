import React from 'react';
import './App.css';

function App() {
  return (
    <div className="App">
      <header>
        <h1>Personal Blog</h1>
      </header>
      <div className='interactive-content'>
          <main>
            <h2>Recents Posts</h2>
          </main>
          <aside>
            <h2>Post</h2>
            <label for='title'>Title</label>
            <input id='title' placeholder='Amazing Day...'></input>
            <label for='content'>Content</label>
            <textarea id='content' placeholder='Today was an amazing day...'></textarea>
            <button>
              <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 1792 1792"><path fill="white" d="M1764 11q33 24 27 64l-256 1536q-5 29-32 45q-14 8-31 8q-11 0-24-5l-453-185l-242 295q-18 23-49 23q-13 0-22-4q-19-7-30.5-23.5T640 1728v-349l864-1059l-1069 925l-395-162q-37-14-40-55q-2-40 32-59L1696 9q15-9 32-9q20 0 36 11"/></svg>
              <span>Post</span>
            </button>
          </aside>
      </div>
    </div>
  );
}

export default App;
