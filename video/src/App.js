import './App.css';
import Video from './components/video'

function App() {
  return (
    <div id="App" className="h-screen w-screen flex flex-col items-center
    justify-center gap-4">
      <div className="font-bold text-2xl">
        <p></p>
        <h1>Title</h1>
      </div>
      <Video />
      <button className="w-1/2 bg-blue-400 text-white p-2
      rounded-md transition-all hover:bg-blue-500
      font-bold hover:rounded-xl active:scale-95">Import Playlist</button>
    </div>
  );
}

export default App;
