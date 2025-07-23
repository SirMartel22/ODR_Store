import React from 'react'
import './BreadCrumb.css'
import { ArrowRight } from 'lucide-react'

const BreadCrumb = (props) => {
    const { product } = props;

  return (
      <div className="breadcrumb">
          HOME <ArrowRight />
          SHOP <ArrowRight />
          {product.category} <ArrowRight />
          {product.name} <ArrowRight />
      
    </div>
  )
}

export default BreadCrumb
