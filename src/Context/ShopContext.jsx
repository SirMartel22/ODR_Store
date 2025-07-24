import React, { createContext, useState, useEffect } from 'react'
import all_product from '/src/assets/all_product'

export const ShopContext = createContext(null);

const getDefaultCart = () => {
  //check it there are saved cart in the locxalStorage

  const savedCart = JSON.parse(localStorage.getItem('cartItems'));
  if (savedCart) {
    return savedCart;
  }

  //if no saved cart, initialize the default cart
  let cart = {};
  for (let index = 0; index < all_product.length + 1; index++){
    cart[index] = 0;
  }
 
  return cart;
} 

const ShopContextProvider = (props) => {

  const [cartItems, setCartItems] = useState(getDefaultCart());

  //load items from localStorage when the component mounts
  useEffect(() => {
    const savedCartItems = JSON.parse(localStorage.getItem('cartItems')) || getDefaultCart();
    setCartItems(savedCartItems);
  }, [])


  // Save Cart Items to localStorage whenever they change
  useEffect(() => {
    localStorage.setItem('cartItems', JSON.stringify(cartItems));

  }, [cartItems])
  
  const addToCart = (itemId) => {
    setCartItems((prev) => ({...prev, [itemId]:prev[itemId] + 1 }))
  }
  console.log(cartItems);

  const removeFromCart = (itemId) => {
    setCartItems((prev) => ({ ...prev, [itemId]:prev[itemId] - 1 }));
  }

  const getTotalCartAmount = () => {
    let totalAmount = 0;
    for (const item in cartItems) {
      if (cartItems[item] > 0) {
        let itemInfo = all_product.find((product) => product.id === Number(item));
        totalAmount += cartItems[item] * itemInfo.new_price;
      }
    }
    return totalAmount;
  }


  const getTotalCartItems = () => {
    return Object.values(cartItems).reduce((total, num) => total + num, 0);
  };

  const contextValue = { all_product, cartItems, addToCart, removeFromCart, getTotalCartAmount, getTotalCartItems};
  
  return (
    <ShopContext.Provider value={contextValue}> 
          {props.children}
   </ShopContext.Provider>
  )
}

export default ShopContextProvider;
