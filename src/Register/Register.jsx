// Register.js
import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const Register = () => {
const navigate = useNavigate(); 
const [error, setError] = useState('');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleRegister = async () => {
    try {
      const response = await axios.post('http://localhost:7900/api/Users/register', {
        Username: username,
        Password: password,
        Role: 'usuario',
      });
  
      // Si el registro es exitoso,redirigir al usuario a la página de inicio de sesión
      navigate('/login');
    } catch (error) {
      if (error.response && error.response.status === 400) {
        // El servidor respondió con un error 400 (Bad Request), lo que indica que el nombre de usuario ya está en uso
        // Muestra un mensaje de error en la interfaz de usuario
        setError('El nombre de usuario ya está en uso. Por favor, elige otro nombre de usuario.');
      } else {
        // Maneja otros errores de solicitud
        console.error('Error al registrar:', error);
      }
    }
  };
  

  return (
    <div>
      <h1>Registro</h1>
      {error && <p>{error}</p>}
      <input
        type="text"
        placeholder="Nombre de usuario"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />
      <input
        type="password"
        placeholder="Contraseña"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <input type="hidden" name="Role" value="usuario" />

      <button onClick={handleRegister}>Registrarse</button>
    </div>
  );
};

export default Register;
