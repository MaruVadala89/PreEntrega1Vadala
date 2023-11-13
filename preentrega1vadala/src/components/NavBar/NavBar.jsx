import React from 'react';
import { Link } from 'react-router-dom';


const NavBar = () => {

  const enlaces = [
    "contacto",
    "ubicacion",
    "detalle"
  ]

  return (

    <div>

      <ul>
       <li>
                <Link to={`/Contacto`}>
                Contacto
                </Link>
            </li>
            <li>
                <Link to={`/Ubicacion`}>
                Ubicacion
                </Link>
            </li>
            <li>
                <Link to={`/Detalle`}>
                Detalle
                </Link>
            </li> 
      </ul>

    </div>

  );
};

export default NavBar;
