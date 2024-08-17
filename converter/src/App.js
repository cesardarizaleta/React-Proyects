import React from 'react';
import './App.css';
import Convertidor from './components/convertidor';

const App = () => {
  return (
    <div id='App' className="h-screen flex items-center justify-center">
      <Convertidor />
    </div>
  );
}

export default App;