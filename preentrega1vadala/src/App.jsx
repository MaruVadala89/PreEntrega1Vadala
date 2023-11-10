import { useState, useEffect} from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import ItemListContainer from './components/ItemListContainer/ItemListContainer'
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer'
import NavBar from './components/NavBar/NavBar'
import Ubicacion from './components/Ubicacion/Ubicacion'
import Footer from './components/Footer/Footer'
import Contacto from './components/Contacto/Contacto'
import {BrowserRouter,Routes,Route} from 'react-router-dom'






function App() {
  

  return (
    <>

    <BrowserRouter>
    <Routes>

      <Route path='/' element={<ItemListContainer/>}/> /*siempre el primer path es '/' */ 
      <Route path='/detalle' element={<ItemDetailContainer/>}/>
      <Route path='/contacto' element={<Contacto/>}/>
     


    </Routes>   
    
    </BrowserRouter>


    <ItemListContainer/>
    <ItemDetailContainer productId={2}/>

    
    </>

  )
}


export default App
