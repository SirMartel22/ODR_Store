import React, { useContext, useState } from 'react'
import './CartItems.css'
import { ShopContext } from '../../Context/ShopContext'
import all_product from '/src/assets/all_product.js'
import { X } from 'lucide-react'
import { PaystackButton } from 'react-paystack'




const CartItems = () => {

    const [name, setName] = useState("")
    const [Address, setAddress] = useState("")
    const [phone, setPhone] = useState("")
    const [email, setEmail] = useState("")

    
    const {getTotalCartAmount, cartItems, removeFromCart} = useContext(ShopContext)
    const publicKey = "pk_test_96e29d43fcf7804a0d92fefd10b3abd651fddc68";

    const componentProps = {
        name,
        Address,
        phone,
        email,          
        amount: getTotalCartAmount() * 100,
        publicKey,
        text: "PROCEED TO CHECKOUT",
        onSuccess: () => {
            alert("Thanks for doing business with us! Some back soon!!")
        },
        onClose: () => {
            alert("Wait! Don't Leave :(")
        }
    }
    return (
      <div className="cartitems">
          <div className="cartitems-format-main">
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
                            <div className="cartitems-format cartitems-format-main"> 
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
                return null;
            })}
          <div className="cartitems-down">
              
              <div className="cartitems-total">
                  <h1>Cart Total</h1>
             

                    <div>
                        <div className="cartitems-total-item">
                            <p>SubTotal</p>
                          <p>${getTotalCartAmount()}</p>
                        </div>
                        <hr />
                        <div className="cartitems-total-item">
                            <p>Shipping Free</p>
                            <p>Free</p>
                        </div>
                        <hr />
                        <div className="cartitems-total-item">
                            <h3>Total</h3>
                          <h3>${ getTotalCartAmount()}</h3>
                        </div>

                    </div>
             </div>

          
            <div className="flex flex-col gap-4">
                <p className="font-bold text-2xl">Kindly enter your details and checkout here </p>
                <div className="flex flex-col gap-4">
                    <input type="text" placeholder="Input your name" onChange={(e)=> setName(e.target.value)} className="bg-gray-100 hover:bg-gray-200 border-none py-2 px-2 rounded-md shadow-sm focus:outline-none"/>
                    <input type="text" placeholder="Input Your Address" onChange={(e) => setAddress(e.target.value)} className="bg-gray-100 hover:bg-gray-200 border-none py-2 px-2 rounded-md shadow-sm focus:outline-none" />
                    <input type="phone" placeholder="Input Your Phone Number" onChange={(e)=> setPhone(e.target.value)} className="bg-gray-100 hover:bg-gray-200 border-none py-2 px-2 rounded-md shadow-sm focus:outline-none"/>
                    <input type="email" placeholder="Input your Email Address " onChange={(e)=> setEmail(e.target.value)} className="bg-gray-100 hover:bg-gray-200 border-none py-2 px-2 rounded-md shadow-sm focus:outline-none"/>
                    <PaystackButton {...componentProps} className=" cursor-pointer bg-blue-500 text-white font-bold py-2 px-1 rounded-md w-1/2 hover:bg-blue-400"/>  
                </div>
            </div>
              
            </div>
            
        </div>
  )
}

export default CartItems
