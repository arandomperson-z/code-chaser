import { useState, useEffect } from 'react';
import './App.css';
import Navbar from './components/Navbar.js'

function App() {
  const [counter, setCounter] = useState(0);

  useEffect(() => {
    alert("counter changed" + counter)
  }, [counter])

  return (
    <div className="App">
      <Navbar />
      <button onClick={() => setCounter((prevCount) => prevCount - 1)}>-</button>
      <h1>{counter}</h1>
      <button onClick={() => setCounter((prevCount) => prevCount + 1)}>+</button>
    </div>
  );
}

export default App;
