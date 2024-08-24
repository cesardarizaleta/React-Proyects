import './App.css';

function App() {

  function verify() {
    alert('hi')
  }

  return (
    <div id="App" className="h-screen w-screen flex flex-col justify-center items-center
    gap-2">

      <main className="w-72 h-fit hover:w-80 transition-all duration-700
       text-white rounded-xl shadow-xl
      ">
        <input onChange={verify} className="w-full rounded-md p-5
        cursor-pointer bg-transparent placeholder:text-white
        text-center outline-none" placeholder="Enter your Password" id="pass"></input>
      </main>

      <div id="progress" className="w-72 h-8 hover:w-80 transition-all duration-700
       text-white rounded-md overflow-hidden relative shadow-xl
      ">
        <div id="barra"
        className="absolute left-0 h-full opacity-50 w-6 bg-blue-200">

        </div>
      </div>


    </div>
  );
}

export default App;
