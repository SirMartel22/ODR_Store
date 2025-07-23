import React, { useContext } from 'react'
import {ShopContext} from '../Context/ShopContext'
import { useParams } from 'react-router-dom'
import BreadCrumb from '../Components/BreadCrumb/BreadCrumb'
import ProductDisplay from '../Components/ProductDisplay/ProductDisplay'

const Product_Details = () => {

  const { all_product } = useContext(ShopContext)
  const { productId } = useParams();
  const product = all_product.find((e) => e.id === Number(productId));
  return (
    <div>
      <BreadCrumb product={product} />
      <ProductDisplay product={product} /> 
    </div>
  )
}

export default Product_Details
