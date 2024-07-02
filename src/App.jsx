import { useState } from 'react'

import './App.css'
import { Outlet, Router } from'react-router-dom'
import Footer from './component/Footer'
import Navbar from './component/Navbar'
import Home from './component/Home'
import { Routes,Route } from 'react-router-dom'
// import Product from './component/Product'
import Product from './component/childcomponent/Product'
import Products from './component/childcomponent/Products'
function App() {


  return (
    <>
     <Navbar/>
    <Routes>
   
      <Route path="/"element={ <Home/>}/>
      <Route path="/products" element={<Products/>} />
        <Route path="/products/:id"  element={<Product/>}/>
    </Routes>
    <Footer/>


 </>
  )
}

export default App
