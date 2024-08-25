import { useEffect, useState } from 'react';
import './App.css';
import Text from './components/text';

function App() {

  const [words, setWords] = useState(0);

  useEffect(() => {
    const count = document.getElementById('count');
    const text = document.querySelector('textarea');

    text.addEventListener('input', () => {
      const wordstotal = text.value.split(' ').filter(word => word !== '').length;
      setWords(wordstotal);
    }
    )
  }, []);

  return (
    <div id="App" className="h-screen w-screen bg-cover bg-center flex
    justify-center items-center gap-4" >
      <Text />
      <div id='count' className='w-fit p-2 h-2/5 rounded-lg flex flex-col justify-center items-center'>
        <span><p className='text-white text-center font-bold'>{words}</p></span>
        <p className='text-white text-center font-bold text-4xl'>Words</p>

      </div>
    </div>
  );
}

export default App;
