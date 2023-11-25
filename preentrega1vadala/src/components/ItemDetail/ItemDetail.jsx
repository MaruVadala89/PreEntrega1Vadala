import React, {useState, useContext} from 'react';
import { Link } from 'react-router-dom';
import ItemCount from '../ItemCount/ItemCount';
import { CartContext } from '../../context/CartContext';



const ItemDetail = ({producto}) => {

    const [quantity,setQuantity] = useState(0)

    const {addToCart} = useContext(CartContext)

    const onAdd = (cantidad) => { 
        setQuantity (cantidad)
        addToCart (producto,cantidad)
    }
    
    return (
        <div>
            <img src={producto.img} alt={producto.nombre} />

            <h2>{producto.nombre}</h2>

            <p>Stock: {producto.stock}</p>
            <p>Precio: {producto.precio}</p>
            <p>Categoria: {producto.categoria}</p>
            <p>Descripción: {producto.descripcion}</p>
            {quantity == 0 
            ?
            <ItemCount initial={1} stock={producto.stock} onAdd={onAdd}/>
            :
            <Link to={"/Cart"}>Ir al Carrito</Link>}
        </div>
    );
};

export default ItemDetail;