import React from 'react'
import './productlist.css'
import Product from '../Product/product'
import {product} from "../../data"

const productlist = () => {
  return (
    <div className="pl">
    <div className="pl-texts">
      <h1 className="pl-title">Here are some of my Projects</h1>
      <p className="pl-desc">
        Hey there! Here are some of my deployed projects, feel free to check them out! 
        Also you can check out my github account to check all of my projects including the 
        ones that are not yet deployed cheers!
      </p>
    </div>
    <div className="pl-list">
      {product.map((item)=>(
      <Product key={item.id} img={item.img} link={item.link}/>
      ))}
    </div>
  </div>
  )
}

export default productlist