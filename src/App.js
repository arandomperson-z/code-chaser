import { useState, useEffect } from 'react';
import './App.css';
import Navbar from './components/Navbar.js';
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Selection from "./pages/Selection.js";
import Home from "./pages/Home.js";
import Java from "./pages/Java.js";
import PageNotFound from './pages/PageNotFound.js';

function App() {
  // const [counter, setCounter] = useState(0);

  // useEffect(() => {
  //   alert("counter changed" + counter)
  // }, [counter])

  return (
    <BrowserRouter>
      <Routes>
        <Route path = "/" element ={<Home/>}></Route>
        <Route path = "selection" element = {<Selection/>}></Route>
        <Route path = "java" element = {<Java/>}></Route>
        <Route path= "*" element={<PageNotFound />}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
