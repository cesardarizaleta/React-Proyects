import './App.css';

function App() {
  return (
    <main id="App" className="h-screen w-screen bg-center bg-cover flex flex-col justify-center
    items-center">
      <div className="w-1/4 h-16 rounded-lg bg-white overflow-hidden p-4 flex gap-2 justify-center items-center">
        <input maxlength='1' className="outline-none w-10 h-10 text-center"></input>
        <input maxlength='1' className="outline-none w-10 h-10 text-center"></input>
        <input maxlength='1' className="outline-none w-10 h-10 text-center"></input>
        <input maxlength='1' className="outline-none w-10 h-10 text-center"></input>
        <input maxlength='1' className="outline-none w-10 h-10 text-center"></input>
        <input maxlength='1' className="outline-none w-10 h-10 text-center"></input>
      </div>
    </main>
  );
}

export default App;
