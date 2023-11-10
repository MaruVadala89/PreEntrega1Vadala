import { useState, useEffect, useRef } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import NavBar from './components/NavBar/NavBar'
import ItemListContainer from './components/ItemListContainer/ItemListContainer'
import ItemCount from './components/ItemCount/ItemCount'
import ProductosListContainer from './components/ProductosListContainer/ProductosListContainer'

function App() {
  
const greeting ="Bienvenidos a mi E-comerce"

const onAdd = (quantity) => {

}
 

  return (
    <>
    <p>Nombre Producto</p>
    <p>Precio Producto</p>
    <ItemCount initial={1} stock={10} onAdd={onAdd}/>

    <NavBar/>
    <ItemListContainer mensaje={greeting}/>
    <ProductosListContainer/>
    </>

  )
}


export default App
