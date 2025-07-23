import React, { useContext } from 'react'
import { ShopContext } from '../Context/ShopContext'
import './CSS/ShopCategory.css'
import { IoIosArrowDropdown } from "react-icons/io";
import Item from '/src/Components/Layout/Item/Item'


const ShopCategory = (props) => {
  const { all_product } = useContext(ShopContext);
  // console.log(all_product)
  return (
    <div className="shop-category">
      <img src={props.banner} alt="" className="shopcategory-banner" />
      <div className="shopCategory-indexSort">
        <p className="">
          <span className="">Showing 1-12</span> out of 36 products
        </p>
        <div className="shopCategory-sort">
          Sort by <IoIosArrowDropdown />
        </div>
      </div>
      <div className="shopcategory-products">
        {all_product.map((item, i) => {
          if(props.category === item.category) {
            console.log(item.category)
            return (
              <Item key={i} id={item.id} name={item.name} image={item.image} new_price={item.new_price} old_price={item.old_price}
            
            />)
          }
        })}

      </div>
    </div>
  )
}

export default ShopCategory
 