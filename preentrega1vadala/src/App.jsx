import { useState, useEffect } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import ItemListContainer from './components/ItemListContainer/ItemListContainer'
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer'
import NavBar from './components/NavBar/NavBar'
import Ubicacion from './components/Ubicacion/Ubicacion'
import Footer from './components/Footer/Footer'
import Contacto from './components/Contacto/Contacto'
import Error from './components/Error/Error'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import NavBoot from './components/NavBoot/NavBoot'
import Cart from './components/Cart/Cart'
import Checkout from './components/Checkout/Checkout'
//4° IMPORTAR EL PROVEEDOR DEL CONTEXTO
import {CartProvider}from './context/CartContext'


function App() {

  

  return (
    <>


      <BrowserRouter>
      {/* 5° ENGLOBAR LA APP CON EL CONTEXTO */}

      <CartProvider>

          <NavBoot/>

          <NavBar/>


          <Routes>


            <Route path='/' element={<ItemListContainer />} />
            <Route path='/:categoryId' element={<ItemListContainer />} />
            <Route path='/item/:idProduct' element={<ItemDetailContainer />} />
            <Route path='/Contacto' element={<Contacto />} />
            <Route path='/Ubicacion' element={<Ubicacion />} />
            <Route path='/Cart' element={<Cart />} />
            <Route path='/Checkout' element={<Checkout/>}/>
            <Route path='*' element={<Error />} />


          </Routes>

          <Footer />

          </CartProvider>

      </BrowserRouter>




    </>

  )
}


export default App
