import React, { useEffect, useState } from 'react';
import './App.css';
import './post.css';

function App() {

  function send() {
    let title = document.getElementById('title').value;
    let description = document.getElementById('content').value;
    
    if(title === '' || description === '') {
      alert('Please fill out all fields');
      return;
    }

    let post = document.createElement('li');
    let leftside = document.createElement('div');
    leftside.appendChild(document.createElement('h2')).innerText = title;
    leftside.appendChild(document.createElement('p')).innerText = description;
    post.appendChild(leftside);
    let btns = document.createElement('div');
    btns.classList.add('btns')
    btns.appendChild(document.createElement('button'));
    btns.querySelector('button').addEventListener('click', Edit);
    post.appendChild(btns)
    post.querySelector('button').innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24"><path fill="black" d="M3 21v-4.25L16.2 3.575q.3-.275.663-.425t.762-.15t.775.15t.65.45L20.425 5q.3.275.438.65T21 6.4q0 .4-.137.763t-.438.662L7.25 21zM17.6 7.8L19 6.4L17.6 5l-1.4 1.4z"/></svg>'; 
    document.querySelector('main ul').appendChild(post);

    document.getElementById('title').value = '';
    document.getElementById('content').value = '';
  }


  function Edit(e) {
    document.querySelector('aside #title').value = e.target.closest('li').querySelector('h2').innerText;
    document.querySelector('aside #content').value = e.target.closest('li').querySelector('p').innerText;
    e.target.closest('li').remove();
  }




  return (
    <div className="App">
      <header>
        <h1>Personal Blog</h1>
      </header>
      <div className='interactive-content'>
          <main>
            <h2>Recents Posts</h2>
            <ul>
            </ul>
          </main>
          <aside>
            <h2>Post</h2>
            <label for='title'>Title</label>
            <input id='title' placeholder='Amazing Day...'></input>
            <label for='content'>Content</label>
            <textarea id='content' placeholder='Today was an amazing day...'></textarea>
            <button onClick={send}>
              <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 1792 1792"><path fill="white" d="M1764 11q33 24 27 64l-256 1536q-5 29-32 45q-14 8-31 8q-11 0-24-5l-453-185l-242 295q-18 23-49 23q-13 0-22-4q-19-7-30.5-23.5T640 1728v-349l864-1059l-1069 925l-395-162q-37-14-40-55q-2-40 32-59L1696 9q15-9 32-9q20 0 36 11"/></svg>
              <span>Post</span>
            </button>
          </aside>
      </div>
    </div>
  );
}

export default App;
