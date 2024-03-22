import { useState, useEffect } from 'react';
import './Java.css';
import Navbar from '../components/Navbar.js'

function Java() {
  const [counter, setCounter] = useState(0);

  // useEffect(() => {
  //   alert("counter changed" + counter)
  // }, [counter])

  return (
    <div className="Home">
      <Navbar />
      <center>
        <button className = "Unit">
            <p> Unit 1: Data Types </p>
        </button>
        <div className = "Topic">
            <center>
            <button className = "Circle"> 
            </button>
            <button className = "TopicDesc">
                <p> name </p>
            </button>
            </center>
        </div>
        <div className = "Topic">
            <center>
            <button className = "Circle"> 
            </button>
            <button className = "TopicDesc">
                <p> name </p>
            </button>
            </center>
        </div>
        <button className = "Unit">
            <p> Unit Test </p>
        </button>
      </center>
    </div>
  );
}

export default Java;
