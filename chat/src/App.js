import React from 'react';
import './App.css';
import Header from './components/header';
import MsgBar from './components/msgbar';

const App = () => {


  return (
    <div className="h-screen *:box-border">
      <Header />
      <MsgBar />
    </div>
  );
}

export default App;