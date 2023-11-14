import React, { useState, useEffect } from 'react';
import ItemList from '../ItemList/ItemList';
import { useParams } from 'react-router-dom';



const ItemListContainer = () => {

    const [products, setProducts] = useState([]); /* Un estado products, funcion setProducts, y un valor inicial del estado vacio */

    const { categoryId } = useParams()


    useEffect(() => {

        const fetchData = () => {
            return fetch("/data/productos.json") /*Trae productos*/
                .then((response) => response.json())/*Los convierte a json*/
                .then((data) => {
                if(categoryId) {
                    const filterProducts = data.filter(p=>p.categoria == categoryId)
                    setProducts(filterProducts)

                }else {
                    setProducts(data)

                }
                    
                })/*Incorpora los productos en la funcion, cambiando el estado de products (valor incial vacio)*/
                .catch((error) => console.log(error)) /*Manejo de errores*/

        }
        fetchData()


    }, [categoryId]) /*Sin dependencia lo ejecuta una vez*/

    return (
        <>

            {
                products.length == 0
                    ? <h1>Cargando...</h1>
                    : <ItemList products={products} />
            }

        </>
    );
};


export default ItemListContainer;