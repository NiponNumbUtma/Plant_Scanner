import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom'; // Importa useNavigate

const Login = () => {
  const navigate = useNavigate(); // Obtiene el objeto 'navigate'
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [token, setToken] = useState('');
  const [error, setError] = useState(null); // Agrega un estado de error

  const handleLogin = async () => {
    try {
      const response = await axios.post('http://localhost:7900/api/Users/login', {
        Username: username,
        Password: password,
        Role: 'usuario',
      });

      const token = response.data.Token;
      // Almacenar el token en el estado global de la aplicación o en una cookie.
      setToken(token);
      setUsername(username); //nombre de usuario
      // Utiliza navigate para redirigir al usuario a la página de inicio
      navigate(`/home?username=${username}`);
    } catch (error) {
      console.error('Error al iniciar sesión:', error);
      setError('Credenciales incorrectas. Inténtalo de nuevo.'); // Establece el mensaje de error
    }
  };
  return (
    <div>
      <h1>Iniciar sesión</h1>
      {error && <p style={{ color: 'red' }}>{error}</p>}
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
      <button onClick={handleLogin}>Iniciar sesión</button>
      <button onClick={() => navigate('/register')}>Registrarse</button>
    </div>
  );
};

export default Login;
