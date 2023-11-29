import React, { useContext } from 'react';
import { Link } from 'react-router-dom';

const CartWidget = () => {



    return (
        <div>
            <Link to="/cart">
            <p>ICONO DE CARRITO</p>
            </Link>
            
            <p>0</p>
                     
        </div>
    );
};

export default CartWidget;