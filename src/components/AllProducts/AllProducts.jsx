import React from 'react'
import Products from '../Products/Products'
import Navbar from '../Navbar/Navbar'
import Footer from '../Footer/Footer'
const AllProducts = () => {
  return (
    <div>
       <div>
      <Navbar />
      {/* Add a wrapper div with top padding here */}
      <div className="pt-24"> 
        <Products />
      </div>
      <Footer />
    </div>
    </div>
  )
}

export default AllProducts
