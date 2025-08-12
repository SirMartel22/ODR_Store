import React from 'react'
// import './Offers.css'
// import exclusive_image from '/src/assets/men-fash.png'

const Offers = () => {
  return (

    <div className=" flex items-center justify-center my-12 ">
      <div className="offers flex bg-gradient-to-l from-[#2840c6] to-[#22096e] rounded-lg flex-col md:flex-row w-[70%] py-2 px-6 bg-[url('/src/assets/bg-3.jpg')] bg-cover bg-center duration-500 transition-all h-[100vh] justify-start items-center shadow-lg">

        <div className="offers-left space-y-4">
          <h1 className="font-bold text-7xl">Exclusive</h1>
          <h1 className="font-bold text-3xl">Offers For You</h1>
          <p className="font-bold text-4xl">ONLY ON BEST SELLERS PRODUCTS</p>
          <button className="bg-gradient-to-r from-[#2840c6] to-[#22096e] p-3 rounded-md shadown-lg text-white font-bold hover:bg-gray-700 hover:scale-105 transition duration-200 mt-12 w-1/3">Check Now</button>
        </div>

        {/* <div className="offers-right">
          <img src={exclusive_image} alt="exclusive image" />
        </div> */}
        
      </div>

    </div>
  )
}

export default Offers
