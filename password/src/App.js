import './App.css';

function App() {

  function verify(e) {
    let barra = document.getElementById('barra')

    let total = e.target.value.length

    barra.style.width = total + 'em'

    if(e.target.value.includes('$') || e.target.value.includes('.') ||
    e.target.value.includes('#') || e.target.value.includes('@') ||
    e.target.value.includes('*') || e.target.value.includes('&') ||
    e.target.value.includes('%')){
      barra.style.backgroundColor = 'red'
    }
    else {
      barra.style.backgroundColor = 'blue'
    }
  }

  function make() {
    let input = document.querySelector('input')
    let hard = ['@','#','$','%','&','*']


    let password = ''
    for (let i = 0; i < 5; i++) {

      password += Math.random().toString(36).substring(2,3)
      password += hard[Math.floor(Math.random()*(hard.length))]
      password += parseInt(Math.random() * 100)
    }

    input.value = password

    navigator.clipboard.writeText(password)

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

      <button className="w-72 h-8 transition-all duration-700
       bg-transparent rounded-full bg-opacity-80 text-white
      " onClick={make}>Generate</button>

      <div id="progress" className="w-72 h-6 hover:w-80 transition-all duration-700
       text-white rounded-full overflow-hidden relative shadow-xl
      ">
        <div id="barra"
        className="absolute left-0 h-full
        transition-all opacity-50 duration-700 w-0 rounded-full">

        </div>
      </div>


    </div>
  );
}

export default App;
