import React from "react";
import Navbar from "../Navbar/Navbar";
import Hero from "../Hero/Hero";
import Category from "../Category/Category";
import Values from "../Values/Values";
import Products from "../Products/Products";
import Discounts from "../Discounts/Discounts";
import Process from "../Process/Process";
import Testimonals from "../Testimonals/Testimonals";
import Footer from "../Footer/Footer";
const Home = () => {


  return (
    
    <div>
      <Navbar />
      <Hero />
      <Category/>
      <Values />
      <Products/>
      <Discounts/>
      <Process/>
      <Testimonals/>
      <Footer/>
    </div>
  );
};

export default Home;
