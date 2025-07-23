import React from 'react'
import Hero from '/src/Components/Layout/Hero/Hero'
import Popular from '/src/Components/Layout/Popular/Popular'
import Offers from '/src/Components/Layout/Offers/Offers'
import NewCollection from '/src/Components/Layout/NewCollection/NewCollection'
import NewsLetter from '/src/Components/Layout/NewsLetter/NewsLetter'
// import Footer from '/src/Components/Layout/Footer/Footer'

const Shop = () => {
  return (
    <div>
      <Hero />
      <Popular />
      <Offers />   
      <NewCollection />
      <NewsLetter />
      {/* <Footer /> */}
    </div>
  )
}

export default Shop
