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
import Error from './components/Error/Error'
import { BrowserRouter, Routes, Route}  from 'react-router-dom'



function App() {
  

  return (
    <>


    <BrowserRouter>

    <NavBar/>

    <Routes>


      <Route path='/' element={<ItemListContainer/>}/> 
      <Route path='/item/:idProduct' element={<ItemDetailContainer/>}/>
      <Route path='/contacto' element={<Contacto/>}/>
      <Route path='/ubicacion' element={<Ubicacion/>}/>
      <Route path='*' element={<Error/>}/>


    </Routes>  

       <Footer/> 
    
    </BrowserRouter>

 

    
    </>

  )
}


export default App
