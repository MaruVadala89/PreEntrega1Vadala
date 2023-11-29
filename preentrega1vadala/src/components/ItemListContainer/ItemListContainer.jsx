import React, { useState, useEffect } from 'react';
import ItemList from '../ItemList/ItemList';
import { useParams } from 'react-router-dom';



const ItemListContainer = () => {

    const [products, setProducts] = useState([]); /*Un estado products, funcion setProducts, y un valor inicial del estado vacio */

    const [loading, setLoading] = useState(true)

    const { categoryId } = useParams()


    useEffect(() => {

        setLoading(true);
        
        const fetchData = () => {

            return fetch("/data/productos.json") //Trae productos
                .then((response) => response.json()) //Los convierte a Json
                .then((data) => {
                    if (categoryId) {
                        const filterProducts = data.filter(p => p.categoria == categoryId)
                        setProducts(filterProducts)

                    } else {
                        setProducts(data)

                    }

                })//Incorpora los productos en la funcion, cambiando el estado de products (valor incial vacio)
                .catch((error) => console.log(error)) //Manejo de errores
                .finally(()=>setLoading(false));
        }
        setTimeout(()=> fetchData(), 2000) // Antes solo estaba fetchData(), se carga todo al toque


    }, [categoryId]) //Sin dependencia lo ejecuta una vez

    return (
        <>
            {
                loading
                    ?
                    (
                        <h1>Cargando...</h1>
                    )
                    :
                    (
                        <ItemList products={products} />
                    )
            }

        </>
    );
};


export default ItemListContainer;