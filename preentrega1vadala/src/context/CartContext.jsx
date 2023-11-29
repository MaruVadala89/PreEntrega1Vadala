import React, {createContext} from 'react';

//1°: CREAMOS INSTANCIA DEL CONTEXTO
export const CartContext = createContext() // Provee a la app el contenido que tengamos en el contexto

//2°: CREAMOS CART PROVIDER. Lo que envuelva el proveedor, va a tomar las funcionalidades. 
const CartProvider = ({children}) => {     //El proveedor, recibe como prop un children,
   
   //CUERPO DEL CONTEXTO

   let hola = "holis"
   
    return (
        //3° COMPARTIR FUNCIONES EN EL CONTEXTO. 
        <CartContext.Provider
        value={
            {
                holis
            }

        }>
            {children}
        </CartContext.Provider>

    )
}

const CartContext = () => {
    return (
        <div>
            
        </div>
    );
};

export default CartContext;