import React from 'react'
import Navbar from './Components/Layout/Navbar/Navbar'
import { Analytics } from '@vercel/analytics/react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Shop from './Pages/Shop'
import ShopCategory from './Pages/ShopCategory'
import Cart from './Pages/Cart'
import Product from './Pages/Product'
// import LoginSignup from './Pages/LoginSignup'
import men_banner from './assets/men.jpg'
import adult_banner from './assets/adult.jpg'
import kid_banner from './assets/kid.jpg'
import Footer from '/src/Components/Layout/Footer/Footer'



function App() {

  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path='/' element={<Shop />} />
          <Route path='/men' element={<ShopCategory category="men" banner={ men_banner} />} />
          <Route path='/adult' element={<ShopCategory category="adult" banner={ adult_banner}  />} />
          <Route path='/kids' element={<ShopCategory category="kid" banner={ kid_banner} /> } />
          <Route path='/product' element={<Product />}>
            <Route path=':productId' element={<Product />} />
          </Route>

          <Route path='/cart' element={<Cart /> } />
          {/* <Route path='/login' element={<LoginSignup /> } /> */}
        </Routes>
        <Footer />

      </BrowserRouter>
      <Analytics />
    </>
  )
}

export default App
