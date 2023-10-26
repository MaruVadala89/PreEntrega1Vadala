import React from 'react';
import "./NavBar.css"
import CartWidget from '../CartWidget/CartWidget';

const NavBar = () => {
    return (
      <nav>
        <ul>
            <h1 className="titulo">Adopta una planta</h1>
            <li><a href="#">Inicio</a></li>
            <li> <a href="#">Plantas</a></li>
            <li> <a href="#">Contacto</a></li>
        </ul>
        <CartWidget/>
      </nav>
    );
};

export default NavBar;