import React from 'react';
import { Link } from 'react-router-dom';


const NavBar = () => {


  return (

    <div>

      <Link to={"/"}>
      <p>LOGO</p>
      </Link>


      <ul>
       <li>
                <Link to={`/contacto`}>
                Contacto
                </Link>
            </li>
            <li>
                <Link to={`/ubicacion`}>
                Ubicacion
                </Link>
            </li>
            <li>
                <Link to={`/detalle`}>
                Detalle
                </Link>
            </li>
         
      </ul>

    </div>

  );
};

export default NavBar;
