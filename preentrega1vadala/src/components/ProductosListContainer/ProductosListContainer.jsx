import React, {useEffect, useEffect} from 'react';
import ProductList from '../ProductList/ProductList';
import productos from "../products"

const ProductosListContainer = () => {

    const [productData,setProductData] = useState([])

    useEffect(()=>{
        const promiseData = () => {
            return new Promise((resolve) => {
                setTimeout(()=> {

                    const productosFile = productos

                    fetch(productosFile).
                    then((response)=>response.json())
                    .then((data)=>{
                        resolve(data)
                    })
                    

                },2000)
            })
        }

        promiseData().then((data)=>{
            setProductData(data)
        })
    },[])

    return (
        <div>
            {productData.length == 0 ? 
            <p>Cargando..</p>
            :
            productData.map((product)=> 
                (
                    <ProductList key={product.id} product={product}/>
                )
            )
            }
            
        </div>
    );
};

export default ProductosListContainer;