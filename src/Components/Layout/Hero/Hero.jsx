import React from 'react'
// import arrow_icon from '/src/assets/logo.png'
import hero_image from '/src/assets/sneaker.png'
import './Hero.css'
import { MoveRight } from 'lucide-react'


const Hero = () => {
  return (
    <div className="hero">
          <div className="hero-left">
              <h2 className="title">ODR Fits and Wears</h2>
              <div>
                  <div className="hand-hand-icon">
                       <p className="">New</p>
                      <img src="" alt="icon image" className="" />
                  </div>
                  <p className="">Collections</p>
                  <p className="">For Everyone</p>
              </div>
              <div className="hero-latest-btn">
                  <div>Latest Collection</div>
                  <MoveRight />
              </div>
      </div>
      <div className="hero-right">
        <img src={hero_image} alt="hero image" className="" />
      </div>
    </div>
  )
}

export default Hero
