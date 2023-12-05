import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import "./NavBar.css"
import CartWidget from '../CartWidget/CartWidget';

const NavBar = () => {

  // const enlaces = [
  //   "Plantas de Interior",
  //   "Plantas de Exterior",
  //   "Contacto",
  //   "Ubicacion"
  // ]


  return (

    <div className='nav'>

      <Link className='enlace' to={"/"}>
        <p>LOGO</p>
      </Link>


      <ul className='enlacesContainer'>

        {/* {enlaces.map((e,id) => 
                    <li className='liContainer' key={id}>
                        <NavLink activeclassname="active" to={`${e}`}>
                         {e}
                        </NavLink>
                    </li>
                )} */}


     
        <li>
          <Link to={`/Interior`}>
            Plantas de Interior
          </Link>
        </li>
        <li>
          <Link to={`/Exterior`}>
            Plantas de Exterior
          </Link>
        </li>
        <li>
          <Link to={`/Contacto`}>
            Contacto
          </Link>
        </li>

      </ul>

      <CartWidget />

    </div>

  );
};

export default NavBar;
