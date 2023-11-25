import React, {useContext} from 'react';
import { CartContext } from '../../context/CartContext';


const Cart = () => {

    const {cart} = useContext(CartContext)
    return (
        <>
            <h1>To carrito</h1>
        </>
    );
};

export default Cart;