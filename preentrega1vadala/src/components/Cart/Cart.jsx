import React, {useContext} from 'react';
import { CartContext } from '../../context/CartContext';


const Cart = () => {

    const {} = useContext(CartContext) //Le pasamos como parametro la instancia del contexto. 
                                        // Aca tambien podemos recibir funciones. 
    return (

        <h1>To carrito</h1>


    );
};

export default Cart;