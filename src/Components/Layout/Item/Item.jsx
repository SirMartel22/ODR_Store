import React from 'react'
// import './Item.css'
import { Link } from 'react-router-dom'

const Item = (props) => {
  const { id, name, image, new_price, old_price, className = "" } = props;
  return (
    <div className={`item ${className}`}>
          <div className="image"> 
            <Link
              to={`/product/${id}`}>
              <img
                onClick={window.scrollTo(0, 0)}
                src={image}
                alt="image"
                className="w-full" 
              />
            </Link>
          </div>
          <p className="">{name}</p>
          <div className="items-prices">
              <div className="item-price-new">
                  ${new_price}
              </div>
              <div className="item-price-old">
                  &{old_price}
              </div>
          </div>
    </div>
  )
}

export default Item
