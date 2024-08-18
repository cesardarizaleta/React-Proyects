import React, { useEffect } from 'react';
import './App.css';
import Login from './components/login';
import Register from './components/register';
import { Lumiflex } from "uvcanvas"

const App = () => {

  useEffect(() => {
    document.title = "Authenticator";

    document.getElementById("btn-change-log").addEventListener("click", () => {
      document.getElementById("register-content").style.right = "0";
      document.getElementById("login-content").style.left = "-50%";
    })

    document.getElementById("btn-change-reg").addEventListener("click", () => {
      document.getElementById("register-content").style.right = "-50%";
      document.getElementById("login-content").style.left = "0";
    })

  }, []);


  return (
    <div className="h-screen flex">
      <Login />
      <Register />
      <Lumiflex />
    </div>
  );
}

export default App;