import { useState, useEffect } from 'react';
import './Home.css';
import Navbar from '../components/Navbar.js'
import { Link } from "react-router-dom";

function Home() {
  const [counter, setCounter] = useState(0);

  // useEffect(() => {
  //   alert("counter changed" + counter)
  // }, [counter])

  return (
    <div>
      <Navbar/>
      <nav>
        <ul>
          <li>
            <Link to = "/selection">Course Selection</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default Home;
