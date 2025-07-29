import React from 'react'
import Products from '../Products/Products'
import Navbar from '../Navbar/Navbar'
import Footer from '../Footer/Footer'
const Seafood = () => {
  return (
    <div>
      <div>
        <Navbar/>
       <div className="pt-24"> 
        <Products />
      </div>
        <Footer/>
      </div>
    </div>
  )
}

export default Seafood
