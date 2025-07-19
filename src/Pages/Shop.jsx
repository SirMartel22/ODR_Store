import React from 'react'
import Hero from '/src/Components/Layout/Hero/Hero'
import Popular from '/src/Components/Layout/Popular/Popular'
import Offers from '/src/Components/Layout/Offers/Offers'
import NewCollection from '/src/Components/Layout/NewCollection/NewCollection'
import NewsLetter from '/src/Components/Layout/NewsLetter/NewsLetter'

// /src/Components/Offers/Offers.jsx

const Shop = () => {
  return (
    <div>
      <Hero />
      <Popular />
      <Offers />   
      <NewCollection />
      <NewsLetter />
    </div>
  )
}

export default Shop
