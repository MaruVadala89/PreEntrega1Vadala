import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import NavBar from './components/NavBar/NavBar'
import ItemListContainer from './components/ItemListContainer/ItemListContainer'
import Greeting from './components/Greeting/Greeting'



function App() {
  
  const greeting = "Bienvenidos a mi E-Comerce"

  return (
    <>
    <NavBar/>
    <ItemListContainer mensaje={greeting}/>
    <Greeting/>
    </>
  )
}


export default App
