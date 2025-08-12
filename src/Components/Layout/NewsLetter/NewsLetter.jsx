import React from 'react'
import './NewsLetter.css'

const NewsLetter = () => {
  return (

    <div className="flex items-center justify-center my-12">
        <div className="bg-gradient-to-r from-[#2840c6] shadow-mdx to-[#22096e] w-[70%] space-y-6 flex flex-col items-center justify-center text-[#f5f5f5] rounded-md py-18">
          <h1 className="text-4xl font-bold ">Get Exclusive Offers On Your Email</h1>
          <p className="font-bold text-2xl">Subscribe to our newsletter and stay updated </p>
          
          <div>
            <input type="email" placeholder="Your Email Id" className="bg-[#f5f5f5] rounded-md shadow-md text-blue-900 text-center py-2 w-96"/>
            <button className="bg-gray-900 py-2 rounded-md px-2 mx-2  text-white cursor-pointer">Subscribe</button>
          </div>
        </div>
    </div>
  )
}

export default NewsLetter
