import React from 'react';
import ItemCount from '../ItemCount/ItemCount';

const ItemDetail = ({producto}) => {

    const onAdd = (quantity) => { /*Mostrar en consola la cantidad de productos */
        alert(quantity)
    }
    
    return (
        <div>
            <img src={producto.img} alt={producto.nombre} />

            <h2>{producto.nombre}</h2>

            <p>Stock: {producto.stock}</p>
            <p>Precio: {producto.precio}</p>
            <p>Categoria: {producto.categoria}</p>
            <p>Descripción: {producto.descripcion}</p>
            <ItemCount initial={1} stock={producto.stock} onAdd={onAdd}/>
        </div>
    );
};

export default ItemDetail;