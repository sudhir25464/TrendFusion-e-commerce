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
import CreateContexts from './context/CreateContexts'
import ThemeContext from './context/ThemeContext'
import Cardlist from './component/childcomponent/Cardlist'
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
  
  <ThemeContext>
     <Navbar/>
     <ScrollToTop />
    <Routes>
   
      <Route path="/"element={ <Home/>}/>
      <Route path="/product" element={<Products/>} />
        <Route path="/products/:id"  element={<Product/>}/>
        <Route path="/youritem"  element={<Cardlist/>}/>

    </Routes>
    <Footer/>
    </ ThemeContext>


 </>
  )
}

export default App
