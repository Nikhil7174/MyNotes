import { useState } from "react";
import reactLogo from "./assets/react.svg";
import "./App.css";
import NavBar from "./assets/NavBar";
import Home from "./assets/Home";
import About from "./assets/About";
import Alert from "./assets/Alert";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import NoteState from "./context/notes/NoteState";
import Login from "./assets/Login";
import SignUp from "./assets/SignUp";

function App() {
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type,
    });
    setTimeout(() => {
      setAlert(null);
    }, 1000);
  };

  return (
    <div className="App">
      <NoteState>
        <BrowserRouter>
          <NavBar style={{ position: "relative" }} />
          <Alert alert={alert} />
          <Routes>
            <Route
              exact
              path="/"
              element={
                <Home style={{ position: "inherit" }} showAlert={showAlert} />
              }
            />
            <Route exact path="/about" element={<About />} />
            <Route
              exact
              path="/login"
              element={<Login showAlert={showAlert} />}
            />
            <Route
              exact
              path="/signup"
              element={<SignUp showAlert={showAlert} />}
            />
          </Routes>
        </BrowserRouter>
      </NoteState>
    </div>
  );
}

export default App;
