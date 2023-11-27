import React, { useContext } from 'react';
import { CartContext } from '../../context/CartContext';
import { Link } from 'react-router-dom';

const CartWidget = () => {


    const {getTotalItems} = useContext(CartContext)

    return (
        <div>
            <Link to="/cart">
            <p>ICONO DE CARRITO</p>
            </Link>
            
            <p>{getTotalItems()}</p>
            
            
        </div>
    );
};

export default CartWidget;