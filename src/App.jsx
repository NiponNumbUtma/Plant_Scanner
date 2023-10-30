import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import Login from './Login/Login';
import Home from './Home/Home';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Register from './Register/Register';
import Registrar_arbol from './Registrar_arbol/Registrar_arbol';

function App() {
  const [username, setUsername] = useState(''); // Define y actualiza el nombre de usuario
  return (
    <Router>
      <div className="App">
        <Routes>
        <Route path="/login" element={<Login setUsername={setUsername} />} /> {/* Pasa setUsername como prop */}
          <Route path="/home" element={<Home username={username} />} />
          <Route path="/register" element={<Register />} />
          <Route path="/register_arbol" element={<Registrar_arbol username={username} />} />
          {/*rutas para otros componentes si es necesario */}
          <Route index element={<Login />} /> {/* Ruta de inicio */}
        </Routes>

        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
      </div>
    </Router>
  );
}

export default App;

