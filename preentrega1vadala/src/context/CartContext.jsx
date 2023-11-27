import React, { createContext, useContext, useState } from 'react';

export const CartContext = createContext()


export const CartProvider = ({ children }) => {


    //ESTADO GLOBAL DEL CARRITO 

    const [cart, setCart] = useState([])


    //FUNCIONES: 

    //FUNCION QUE SE ENCARGUE DE AGREGAR PRODUCTOS AL CARRITO

    const addToCart = (producto, cantidad) => {
        if (!isInCart(producto.id)) {
            setCart((prev) => [...prev, { producto, cantidad }])

        } else {
            console.log("no se puede agregar mas")

        }
    }

    //FUNCION QUE DETERMINE SI EL PRODUCTO YA ESTA EN EL CARRITO
    const isInCart = (itemId) => {
        return cart.some((i) => i.item.id === itemId)
    }

    //FUNCION PARA DETERMINAR CANTIDAD TODAL DE PRODUCTOS EN EL CARRITO
    const getTotalItems = (item) => {
        let cant = 0;
        cart.forEach((e) => cant += e.cantidad)
        return cant


    }

    //FUNCION QUE REMUEVE PRODUCTOS DEL CARRITO

    const removeItem = (id) => {
        const filtrarCarrito = cart.filter((item) => item.producto.id !== id)
        setCart(filtrarCarrito)
    }

    //FUNCION QUE LIMPIA EL CARRITO

    const clearCart = () => { setCart([]) }


    return (

        <CartContext.Provider value={
            {
                cart,
                setCart,
                addToCart,
                isInCart,
                getTotalItems,
                removeItem,
                clearCart

            }
        }>
            {children}
        </CartContext.Provider>



    );
};

