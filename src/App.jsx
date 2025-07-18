import React from 'react'
import Navbar from './Components/Layout/Navbar/Navbar'
import { Analytics } from '@vercel/analytics/react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Shop from './Pages/Shop'
import ShopCategory from './Pages/ShopCategory'
import Cart from './Pages/Cart'
import Product from './Pages/Product'
import LoginSignup from './Pages/LoginSignup'


function App() {

  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path='/' element={<Shop />} />
          <Route path='/men' element={<ShopCategory category="men"/>} />
          <Route path='/adult' element={<ShopCategory category="adult"/>} />
          <Route path='/kids' element={<ShopCategory category="kid"/>} />
          <Route path='/product' element={<Product />}>
            <Route path=':productId' element={<Product />} />
          </Route>

          <Route path='/cart' element={<Cart /> } />
          <Route path='/login' element={<LoginSignup /> } />
        </Routes>
      </BrowserRouter>
      <Analytics />
    </>
  )
}

export default App
