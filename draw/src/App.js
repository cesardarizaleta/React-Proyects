import './App.css';
import Frame from './components/frame';
import Controls from './components/controls';

function App() {
  return (
<div class="absolute inset-0 -z-10 h-screen w-screen bg-white bg-[linear-gradient(to_right,#f0f0f0_1px,transparent_1px),linear-gradient(to_bottom,#f0f0f0_1px,transparent_1px)] bg-[size:6rem_4rem]">
    <main id="App" className="h-screen w-screen relative flex justify-center items-center flex-wrap gap-4">
      <Frame />
      <Controls />
    </main>
</div>
  );
}

export default App;
