import React, { useContext } from 'react';
import { CartContext } from '../../context/CartContext';
import Item from '../Item/Item'

const Cart = () => {

    const { cart, clearCart, removeItem } = useContext(CartContext)
    console.log(cart);
    return (
        <div>
            <h1>To carrito</h1>

            <ul>
                {
                    cart.length > 0 ?
                        (
                            cart.map((item) => {
                                return (
                                    <li>
                                        <Item product={item.producto} />
                                        <button onClick={() => removeItem(item.producto.id)}>Eliminar producto</button>
                                    </li>
                                );
                            })

                        ) : (
                            <h3>No hay productos agregados...</h3>
                        )}
            </ul>
            <button onClick={clearCart}>Vaciar carrito</button>
        </div>
    );
};

export default Cart;