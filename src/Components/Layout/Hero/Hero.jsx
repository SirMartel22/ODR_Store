import React from 'react'
import hero_image from '/src/assets/sneaker.png'
import './Hero.css'
import { MoveRight } from 'lucide-react'


const Hero = () => {
  return (
    <div className="flex flex-col md:flex-row items-center justify-center px-12 py-18 gap-2 bg-[#895ab7ff] overflow-hidden">

      <div className="hero-left flex flex-col gap-2 items-start justify-center w-[70%] ">
          <h2 className="font-bold text-4xl text-white">ODR Fits and Wears</h2>
          <div className="flex flex-col items-start justify-left text-left w-full mb-8">
              <p className="text-[100px] font-[700] text-white">New</p>
              <p className="font-bold text-3xl text-[#0f0]">Collections</p>
              <p className=" font-bold text-3xl text-[#fff]">For Everyone</p>
          </div>
          <div className="hero-latest-btn flex gap-4 items-center justify-center bg-[#f3f3f3] p-4 rounded-lg w-[50%]">
              <div className="font-bold text-1xl text-purple">Latest Collection</div>
              <MoveRight />
          </div>
      </div>

      <div className="hero-right w-[70%]">
        <img src={hero_image} alt="hero image" className="w-full " />
      </div>

    </div>
  )
}

export default Hero
