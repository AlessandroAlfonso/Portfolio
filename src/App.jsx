import React from 'react'
import Home from './component/home/home'
import About from './component/About/about'
import ProductList from './component/ProductList/productlist'
import Contact from './component/Contact/Contactme'

const App = () => {
  return (
    <div>
      <Home/>
      <About/>
      <ProductList/>
      <Contact/>
    </div>
  )
}  

export default App