import React from 'react'
import Products from '../Products/Products'
import Navbar from '../Navbar/Navbar'
import Footer from '../Footer/Footer'
const Dairy = () => {
  return (
    <div>
       <Navbar/>
      <div className="pt-24"> 
        <Products />
      </div>
        <Footer/>
    </div>
  )
}

export default Dairy
