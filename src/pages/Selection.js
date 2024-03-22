import { useState, useEffect } from 'react';
import './Selection.css';
import Navbar from '../components/Navbar';
import { Link } from 'react-router-dom';

function Selection() {
  return (
    <div className="Selection">
      <Navbar/>
      <div className="selection_container">
        <Link to="*"> <button className="selection_box">Python</button></Link>
        <Link to="/java"> <button className="selection_box">Java</button></Link>
        <Link to="*"> <button className="selection_box">C++</button></Link>
      </div>
    </div>
  );
}

export default Selection;
