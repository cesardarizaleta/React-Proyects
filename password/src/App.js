import './App.css';

function App() {
  return (
    <div id="App" className="h-screen w-screen grid place-items-center">

      <main className="w-72 h-fit hover:w-80 transition-all duration-700
       text-white rounded-xl shadow-xl
      ">
        <input className="w-full rounded-md p-5
        cursor-pointer bg-transparent placeholder:text-white
         outline-none" placeholder="Enter your Password" id="pass"></input>
      </main>

    </div>
  );
}

export default App;
