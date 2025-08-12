import React from 'react'
import new_collection from "/src/assets/new_collection"
import Item from '../Item/Item'

const NewCollection = () => {
  // console.log(new_collection[0].image)
  return (
    <div className="new-collection px-4 md:px-16 w-full">
      <h1 className="font-bold text-center text-2xl">NEW COLLECTIONS</h1>
      <hr className="mb-10 w-24 text-center flex items-center justify-center"/>
      <div className="collections px-4 md:px-8 grid grid-rows md:grid-cols-4 gap-4">
        {new_collection.map((item, i) => {
          return <Item key={i}
            id={item.id}
            name={item.name}
            image={item.image}
            new_price={item.new_price}
            old_price={item.old_price}
            className="bg-[#f5f5f5]-400 shadow-md rounded-md p-4"
          />
        })}
      </div>
    </div>
  )
}

export default NewCollection
