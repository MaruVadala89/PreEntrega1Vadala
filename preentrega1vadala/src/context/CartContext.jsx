import React, { createContext, useState } from 'react';

//1°: CREAMOS INSTANCIA DEL CONTEXTO
export const CartContext = createContext() // Provee a la app el contenido que tengamos en el contexto

//2°: CREAMOS CART PROVIDER. Lo que envuelva el proveedor, va a tomar las funcionalidades. 
export const CartProvider = ({ children }) => {     //El proveedor, recibe como prop un children,

    //CUERPO DEL CONTEXTO

    //8° Creamos carrito, inicialmente vacio. Total y Cantidad
    const [cart, setCart] = useState([])
    const [total, setTotal] = useState(0)
    const [cantidadTotal, setCantidadTotal] = useState(0)

    //9° Funciones 

    //Agregar al carrito
    const addToCart = (producto, cantidad) => {
        const productoExistente = cart.find(prod => prod.producto.id === producto.id);

        if (!productoExistente) {

            setCart(prev => [...prev, { producto, cantidad }])
            setCantidadTotal(prev => prev + cantidad)
            setTotal(prev => prev + (producto.precio * cantidad))
        }

        else {
            const carritoActualizado = cart.map(prod => {
                if (prod.producto.id === producto.id) {
                    return { ...prod, cantidad: prod.cantidad + cantidad }

                } else {
                    return prod;
                }
            })

            setCart(carritoActualizado)
            setCantidadTotal(prev => prev + cantidad)
            setTotal(prev => prev + (producto.precio * cantidad))

        }

    }


    //Remover del carrito
    const removeItem = (id) => {
        const productoEliminado = cart.find(prod => prod.producto.id === id);
        const carritoActualizado = cart.filter(prod => prod.producto.id !== id);

        setCart(carritoActualizado);
        setCantidadTotal(prev => prev - productoEliminado.cantidad);
        setTotal(prev => prev - productoEliminado.producto.precio * productoEliminado.cantidad);
    };


    //Limpiar carrito
    const clearCart = () => {
        setCart([]);
        setCantidadTotal(0);
        setTotal(0);

    }
    return (
        //3° COMPARTIR FUNCIONES EN EL CONTEXTO. 
        <CartContext.Provider
            value={
                {
                    cart,
                    total,
                    cantidadTotal,
                    addToCart,
                    clearCart,
                    removeItem
                }

            }>
            {children}
        </CartContext.Provider>

    )
}


