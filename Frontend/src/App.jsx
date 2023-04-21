import { useState } from "react";
import reactLogo from "./assets/react.svg";
import "./App.css";
import NavBar from "./assets/NavBar";
import Home from "./assets/Home";
import About from "./assets/About";
import Alert from "./assets/Alert";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import NoteState from "./context/notes/NoteState";

function App() {
  return (
    <div className="App">
      <NoteState>
        <BrowserRouter>
          <NavBar style={{ position: "relative" }} />
          <Alert message={"This is amazing react course"} />
          <Routes>
            <Route
              exact
              path="/"
              element={<Home style={{ position: "inherit" }} />}
            />
            <Route exact path="/about" element={<About />} />
          </Routes>
        </BrowserRouter>
      </NoteState>
    </div>
  );
}

export default App;
