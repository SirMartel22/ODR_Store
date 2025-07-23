import React from 'react'
import './ProductDisplay.css'
import {Star} from 'lucide-react'



const ProductDisplay = (props) => {
    const {product} = props
  return (
    <div className="productdisplay">
          <div className="productdisplay-left">
              <div className="productdisplay-img-list">
                  <img src={product.image} alt="" />
                  <img src={product.image} alt="" />
                  <img src={product.image} alt="" />
                  <img src={product.image} alt="" />
              </div>
              <div className="productdisplay-img">
                  <img src={ product.image } alt="" className="productdisplay-main-img" />
              </div>
          </div>
          <div className="productdisplay-right">
              <h1>{product.image}</h1>
              <div className="productdisplay-right-star">
                  <Star color="red"/>
                  <Star color="red"/>
                  <Star color="red"/>
                  <Star color="red"/>
                  <Star />
                <p>(122)</p>
              </div>
              <div className="productdisplay-right-prices">
                  <div className="productdisplay-right-price-old">
                      ${product.old_price}
                  </div>
                  <div className="productdisplay-right-price-new">
                      ${product.new_price}
                  </div>
                </div>
                  <div className="productdisplay-right-description">
                      Lorem, ipsum dolor sit amet consectetur adipisicing
                       elit. Enim accusantium, iure esse sunt
                  </div>
                  <div className="productdisplay-right-size">
                      <h1>Select Size </h1>
                      <div className="productdisplay-right-sizes">
                          <div>S</div>
                          <div>M</div>
                          <div>L</div>
                          <div>XL</div>
                          <div>XXL</div>
                      </div>
                  </div>

                  <button>ADD TO CART</button>
                  <p className="productdisplay-right-category">
                      <span>Category: <span>Men, Trainers, Sneakers </span></span>
                  </p>
                  <p className="productdisplay-right-category">
                      <span>Tags: <span>Modern, Latest </span></span>
                  </p>
              </div>
          </div>
    // </div>
  )
}

export default ProductDisplay
