import React, { useContext } from 'react';
import { CartContext } from '../../context/CartContext';
import Item from '../Item/Item'

const Cart = () => {

    const { cart } = useContext(CartContext)
    return (
        <div>
            <h1>To carrito</h1>
            <ul>
                {
                    cart.length > 0 ?
                        (
                            cart.map((item) => {
                                return <li>
                                    <Item product={item.producto} />
                                </li>
                            })
                        ) : (
                            <h3>No hay productos agregados...</h3>
                        )
                }
            </ul>
        </div>
    );
};

export default Cart;