import React from 'react'
import data_product from '/src/assets/data.js'
import Item from '../Item/Item'

const Popular = () => {
  return (
    <div className="popular flex flex-col gap-4 items-center justify-center mt-16 w-full px-16">
          <h1 className="text-[#171717] font-[600] text-[30px]">POPULAR IN MEN</h1><hr  className="w-[200px] h-[6px] rounded-lg bg-[#252525]"/>
          <div className="popular-item mt-[50px] flex flex-col md:flex-row gap-[30px] md:p-4">
              {data_product.map((item, i) => {
                  return <Item key={i}
                      id={item.id}
                      name={item.name}
                      image={item.image}
                      new_price={item.new_price}
                      old_price={item.old_price}
                      className="bg-white rounded-md shadow-lg hover:shadow-2xl transition-shadow duration-300 w-full md:px-4 md:py-4 space-y-2"
                  />
              })}
          </div>
          
    </div>
  )
}

export default Popular
