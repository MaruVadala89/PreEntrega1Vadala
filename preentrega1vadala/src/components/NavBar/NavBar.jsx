import React from 'react';
import { Link } from 'react-router-dom';


const NavBar = () => {

  const enlaces = [
    "Plantas de Interior",
    "Plantas de Exterior",
    "Contacto",
    "Ubicacion"
  ]


  return (

    <div>

      <Link to={"/"}>
      <p>LOGO</p>
      </Link>


      <ul>

      {enlaces.map((e,id) => 
                    <li key={id}>
                        <Link to={`${e}`}>
                         {e}
                        </Link>
                    </li>
                )}

       {/* <li>
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
                <Link to={`/Plantas de Interior`}>
                Plantas de Interior
                </Link>
            </li>
            <li>
                <Link to={`/Plantas de Exterior`}>
                Plantas de Exterior
                </Link>
            </li>
          */}
      </ul>

    </div>

  );
};

export default NavBar;
