import React, { useContext } from 'react';
import { CartContext } from '../../context/CartContext';

const CartWidget = () => {


    const {getTotalItems} = useContext(CartContext)

    return (
        <div>

            <p>ICONO DE CARRITO</p>
            <p>{getTotalItems()}</p>
            
            
        </div>
    );
};

export default CartWidget;