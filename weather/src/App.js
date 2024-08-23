import './App.css';
import Weather from './components/weather';
import Cloud1 from './resources/Clay_White0001.png'
import Cloud2 from './resources/Clay_White0060.png'

function App() {
  return (
    <div id="App" className="h-screen w-screen relative bg-blue-400">
      <img src={Cloud2} alt="cloud" className="absolute top-0 left-0 z-20" />
      <img src={Cloud1} alt="cloud" className="absolute bottom-0 right-0 z-20" />
      <Weather />
    </div>
  );
}

export default App;
