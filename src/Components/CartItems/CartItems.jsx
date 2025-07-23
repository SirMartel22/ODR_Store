import React, { useContext } from 'react'
import './CartItems.css'
import { ShopContext } from '../../Context/ShopContext'
import all_product from '/src/assets/all_product.js'
import { X } from 'lucide-react'


const CartItems = () => {

    const {all_products, cartItems, removeFromCart} = useContext(ShopContext)
  return (
      <div className="cartitems">
          <div className="">
                <p>Products</p>
                <p>Title</p>
                <p>Price</p>
                <p>Quantity</p>
                <p>Total</p>
                <p>Remove</p>
            </div>
            <hr />

            {all_product.map((e) => {
                if (cartItems[e.id] > 0) {
                    return (
                        <div key={e.id}> 
                            <div className="cartItems-format cartItems-formart-main"> 
                                <img className="carticon-product-icon" src={e.image} alt="" />
                                <p>{e.name}</p>
                                <p>${e.new_price}</p>
                                <button className="cartitems-quantity">{cartItems[e.id]}</button>
                                <p>${e.new_price * cartItems[e.id]}</p>
                                <div className="cartitems-remove-icon">
                                    <X onClick={() => removeFromCart(e.id)} />
                                </div>
                               
                            </div>
                       </div>
                   )
               } 
            })}
              
        </div>
  )
}

export default CartItems
