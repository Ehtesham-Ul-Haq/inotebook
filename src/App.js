import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { useState } from 'react';
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import About from "./components/About";
import NoteState from "./context/notes/NoteState";
import Alert from "./components/Alert";
import Login from "./components/Login";
import Signup from "./components/Signup";
function App() {

  const [mode, setMode] = useState('light');  
  const [alert, setAlert] = useState(null);


  const showAlert = (message, type) => {
    setAlert({
      msg : message,
      type :type
    })
    setTimeout(() => {
      setAlert(null);
    }, 2000);
  }

  const toggleMode = () =>{
    if (mode==='light') {
        setMode('dark');
        document.body.style.backgroundColor = '#0f032d';
        showAlert("Dark Mode has been Enabled", "Success");
    }
    else {
      setMode('light');
      document.body.style.backgroundColor = 'white';
      showAlert("Light Mode has been Enabled", "Success");
    }
  }

  return (
    <>
      <NoteState>
        <BrowserRouter>
          <Navbar mode={mode} toggleMode={toggleMode} />
          <Alert alert={alert}  mode={mode} />
          <div className="container">
            <Routes>
              <Route exact path="/" element={<Home mode={mode} showAlert={showAlert} />} />
              <Route exact path="/about" element={<About mode={mode} showAlert={showAlert} />} />
              <Route exact path="/login" element={<Login mode={mode} showAlert={showAlert} />} />
              <Route exact path="/signup" element={<Signup mode={mode} showAlert={showAlert} />} />
            </Routes>
          </div>
        </BrowserRouter>
      </NoteState>
    </>
  );
}

export default App;
