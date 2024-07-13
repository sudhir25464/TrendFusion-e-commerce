import { useState } from 'react'

import './App.css'
import { Outlet, Router } from'react-router-dom'
import Footer from './component/Footer'
import Navbar from './component/Navbar'
import Home from './component/Home'
import { useEffect } from'react'
import { Routes,Route } from 'react-router-dom'
// import Product from './component/Product'
import Product from './component/childcomponent/Product'
import Products from './component/childcomponent/Products'
import { useLocation } from'react-router-dom';
function App() {


  const ScrollToTop = () => {
    const { pathname } = useLocation();
  
    useEffect(() => {
      window.scrollTo(0, 0);
    }, [pathname]);
  
    return null;
  };

  return (
    <>
    
     <Navbar/>
     <ScrollToTop />
    <Routes>
   
      <Route path="/"element={ <Home/>}/>
      <Route path="/product" element={<Products/>} />
        <Route path="/products/:id"  element={<Product/>}/>
    </Routes>
    <Footer/>


 </>
  )
}

export default App
