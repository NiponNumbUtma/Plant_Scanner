import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

function Home(props) {
    const navigate = useNavigate();
    const location = useLocation();
    const searchParams = new URLSearchParams(location.search);
    const username = searchParams.get('username');
    navigate(`/register_arbol?username=${username}`);
    return (
      <div>
        <h1>Bienvenido, {username}</h1>
        {/* Aquí puedes mostrar el nombre de usuario y agregar los botones que necesitas */}
        <div>
        <button>Navegar</button>
        <button>Escanear</button>
        <button onClick={() => navigate('/register_arbol')}>Registrar arbolito</button>
      </div>
      </div>
    );
  }
  
export default Home;

