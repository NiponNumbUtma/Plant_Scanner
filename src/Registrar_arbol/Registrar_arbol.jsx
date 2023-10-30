import React from 'react';
import { useLocation } from 'react-router-dom';


function Registrar_arbol(props){
    const location = useLocation();
    const searchParams = new URLSearchParams(location.search);
    const username = searchParams.get('username');
  
    return (
      <div>
        <h1>¡Vamos a registrar tu arbolito!, {username}</h1>
        {/*mostrar el nombre de usuario y agregar los botones */}
        <div>
        <button>Navegar</button>
        <button>Escanear</button>
        <button>Registrar árbol</button>
      </div>
      </div>
    );
  }
export default Registrar_arbol;