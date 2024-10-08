import './App.css';
import React from 'react';
import { BrowserRouter, Route, Switch, Routes } from 'react-router-dom';
import Navbar from './components/navbar';
import Home from './components/home';
import Comprar from './components/comprar';

function App() {
  return (
    <div className="App">
    <BrowserRouter>
      <Navbar />
      <main>
        <Routes>
          <Route index path="/" element={<Home />} />
          <Route path="components/comprar" element={<Comprar />} />
        </Routes>
      </main>
    </BrowserRouter>
    </div>
  );
}

export default App;
