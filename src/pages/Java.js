import React from 'react';
import { useState, useEffect } from 'react';
import './Java.css';
import Navbar from '../components/Navbar.js'

const Block = (props) => {
  return (
    <center>
      <button className = "Unit">
          <p className = "title"> Unit {props.Num}: {props.unitName} </p>
      </button> 
    </center>
  )
}

function Java() {
  // useEffect(() => {
  //   alert("counter changed" + counter)
  // }, [counter])

  return (
    <div className="Home">
      <Navbar />
      <center>
        <Block Num = {1} unitName = {"Data Types"} topicName = {"Boolean"}/>
        <button className = "Circle"> 
        <p className = "number"> 1</p>
        </button>
        <button className = "TopicDesc">
            <p className = "sub"> Boolean </p>
        </button>
        <br></br>
        <button className = "Circle"> 
        <p className = "number"> 2 </p>
        </button>
        <button className = "TopicDesc">
            <p className = "sub"> Integer </p>
        </button>
        <br></br>
        <button className = "Unit">
            <p className = "title"> Unit Test </p>
        </button>
      </center>
    </div>
  );
}

export default Java;
