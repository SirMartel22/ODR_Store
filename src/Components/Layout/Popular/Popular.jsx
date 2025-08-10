import React from 'react'
import './Popular.css'
import data_product from '/src/assets/data.js'
import Item from '../Item/Item'

const Popular = () => {
  return (
    <div className="popular flex flex-col h-[90vh] gap-[10px] items-center justify-center mt-[60px] w-[80%] px-12">
          <h1 className="text-[#171717] font-[600] text-[30px]">POPULAR IN MEN</h1><hr  className="w-[200px] h-[6px] rounded-lg bg-[#252525]"/>
          <div className="popular-item mt-[50px] flex flex-col md:flex-row gap-[30px]">
              {data_product.map((item, i) => {
                  return <Item key={i}
                      id={item.id}
                      name={item.name}
                      image={item.image}
                      new_price={item.new_price}
                      old_price={item.old_price}
                  />
              })}
          </div>
          
    </div>
  )
}

export default Popular
