import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import NavBar from './assets/NavBar'
import Home from './assets/Home';
import About from './assets/About';
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {

  return (
    <div className="App">
      <BrowserRouter>
      <NavBar style={{position:"relative"}}/>
      <Routes>
          <Route
            exact
            path="/"
            element={<Home style={{position:"inherit"}}/>}
          />
          <Route
            exact
            path="/about"
            element={<About/>}
          />
          </Routes>
      </BrowserRouter>
      
    </div>
  )
}

export default App
