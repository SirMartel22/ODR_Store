import React from 'react'
import new_collection from "/src/assets/new_collection"
import Item from '../Item/Item'

const NewCollection = () => {
  // console.log(new_collection[0].image)
  return (
    <div className="new-collection ">
      <h1>NEW COLLECTIONS</h1>
      <hr />
      <div className="collections grid gap-8 column-4 row-2">
        {new_collection.map((item, i) => {
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

export default NewCollection
