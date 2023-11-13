import React, {useState,useEffect} from 'react';
import ItemList from '../ItemList/ItemList';
import NavBar from '../NavBar/NavBar';



const ItemListContainer = () => {

    const [products,setProducts] = useState([]); /* Un estado products, funcion setProducts, y un valor inicial del estado vacio */

    useEffect (() => {
       
        const fetchData = () => {
            return fetch("/data/productos.json") /*Trae productos*/
            .then((response) => response.json())/*Los convierte a json*/
            .then((data)=> {setProducts(data)})/*Incorpora los productos en la funcion, cambiando el estado de products (valor incial vacio)*/
            .catch((error) =>console.log(error)) /*Manejo de errores*/

        }
        fetchData() 


    },[]) /*Sin dependencia lo ejecuta una vez*/

    return (
        <>
          
        {
            products.length == 0 
            ? <h1>Cargando...</h1> 
            : <ItemList products={products}/> 
        }
           
        </>
    );
};


export default ItemListContainer;