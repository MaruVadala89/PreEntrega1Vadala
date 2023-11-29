import React, { useContext } from "react";
import { CartContext } from "../../context/CartContext";

const Cart = () => {

  const {cart,total, clearCart} = useContext(CartContext);

  
  return (
    <div>

      <h1>Tu Carrito</h1>

      <div>

      </div>

      <h2>Valor total: ${total}</h2>
      
      <button onClick={()=>{clearCart()}}>Limpiar carrito</button>
     
    </div>
  );
};

export default Cart;
