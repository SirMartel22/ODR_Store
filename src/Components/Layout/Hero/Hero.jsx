import React from 'react'
// import hero_image from '/src/assets/sneaker.png'
import { MoveRight } from 'lucide-react'

const Hero = () => {
  return (
    <div className="flex flex-col md:flex-row items-start justify-start px-6 md:px-24 py-10 md:py-18 gap-8 bg-gradient-to-r from-purple-600 via-pink-500 to-yellow-400 bg-[url('/src/assets/shop-bg.jpg')] bg-cover bg-center overflow-hidden transition-all duration-500  overflow-hidden transition-all duration-500 h-[150vh] py-96">
 
      <div className="hero-left flex flex-col gap-4 items-start justify-center w-full md:w-1/2">
        <h2 className="font-bold text-3xl md:text-4xl text-[#F5F5F5] drop-shadow-lg">ODR Fits and Wears</h2>
        <div className="flex flex-col items-start text-left w-full mb-8">
          <p className="font-extrabold text-[48px] md:text-[100px] text-[#FF4081] leading-none my-4">New Collections</p>
          <p className="font-bold text-2xl md:text-3xl text-white">For Everyone</p>
        </div>
        <button className="hero-latest-btn flex gap-2 items-center bg-white/90 hover:bg-white text-purple-700 font-bold px-6 py-3 rounded-lg shadow-lg transition-all duration-300">
          Latest Collection
          <MoveRight />
        </button>
      </div>
    </div>
  )
}

export default Hero