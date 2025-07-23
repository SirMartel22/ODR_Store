import React from 'react'
import './Item.css'
import { Link } from 'react-router-dom'

const Item = (props) => {
  return (
    <div className="item">
          <div className="image"> 
              <Link to={`/product/${props.id}`}><img src={props.image} alt="image" className="" /></Link>
          </div>
          <p className="">{props.name}</p>
          <div className="items-prices">
              <div className="item-price-new">
                  ${props.new_price}
              </div>
              <div className="item-price-old">
                  &{props.old_price}
              </div>
          </div>
    </div>
  )
}

export default Item
