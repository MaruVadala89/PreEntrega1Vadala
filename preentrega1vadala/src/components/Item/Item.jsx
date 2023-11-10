import React from 'react';

const Item = ({product}) => {
    return (
        <>

        <div className= 'contenedor'>
            <h1>{product.nombre}</h1>
            <img src={product.img} alt={product.nombre} />


        </div>

            
        </>
    );
};

export default Item;