import React, { useState, useEffect } from 'react';
import ItemList from '../ItemList/ItemList';
import { useParams } from 'react-router-dom';
import { collection,getDocs, getFirestore, query, where } from 'firebase/firestore';



const ItemListContainer = () => {

    const [products, setProducts] = useState([]); /*Un estado products, funcion setProducts, y un valor inicial del estado vacio */
    const [loading, setLoading] = useState(true);
    const { categoryId } = useParams();


    useEffect(() => {
        //INICIAMOS EL ESTADO DE CARGA DE PRODUCTOS

        setLoading(true);

        //CREAMOS BASE DE DATOS
        const db = getFirestore()

        //FILTRAMOS PRODUCTOS CON QUERY Y WHERE

        const misProductos = categoryId ? query(collection(db, "Productos"), where("categoria", "==", categoryId)) : collection(db, "Productos")

        //GENERAMOS DOCUMENTOS
        getDocs(misProductos)
            .then((res) => {
                const nuevosProductos = res.docs.map((doc) => {
                    const data = doc.data()
                    return {id: doc.id,...data}
                })
                setProducts(nuevosProductos)
            })
            .catch((error) => console.log(error))
            .finally(() => {

                //CANCELAMOS LOADING Y SE MUESTRAN PRODUCTOS
                setLoading(false)
            })

    }, [categoryId]); //Sin dependencia lo ejecuta una vez

    return (
        <>
            {
                loading ? ( <h1>Cargando...</h1>) : (<ItemList products={products}/>)
            }

        </>
    );
};


export default ItemListContainer;