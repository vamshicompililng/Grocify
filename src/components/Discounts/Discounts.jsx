import React from "react";
import Button from "../Buttons/Button";
import FruitSet from '../../assets/fresh-fruits.png'

const Discounts = () => {
  return (
    <section 
      // Mobile: background image at the top. 
      // Medium & up: image moves to the right and is contained.
      className="bg-zinc-100 bg-no-repeat md:bg-right md:bg-contain bg-top" 
      style={{backgroundImage:`url(${FruitSet})`}}
    >
      <div 
        // Mobile: column layout, centered items, more vertical padding.
        // Medium & up: row layout, left-aligned text, adjusted padding.
        className="flex flex-col md:flex-row items-center text-center md:text-left max-w-[1400px] mx-auto px-6 md:px-10 py-16 md:py-10"
      >
        
        {/* The 30% discount text */}
        {/* Mobile: standard text. Medium & up: rotated with adjusted margin. */}
        <div className="md:-rotate-90 mb-8 md:mb-0">
          <span 
            // Mobile: smaller font size. Medium & up: larger font size.
            className="text-7xl md:text-9xl text-orange-500 font-bold"
          >
            30%
          </span>
        </div>

        {/* The main content */}
        <div 
          // Mobile: no margin. Medium & up: add left margin for spacing.
          className="max-w-[700px] md:ml-8"
        >
          <h3 
            // Mobile: smaller heading. Medium & up: larger heading.
            className="text-5xl md:text-7xl text-zinc-800 font-bold"
          >
            First Order Discount!
          </h3>
          {/* --- MODIFIED LINE BELOW --- */}
          <p className="text-zinc-800 md:text-zinc-600 my-6">
            Enjoy a 30% discount on your first order! No coupon code required.
            Discount is automatically applied at checkout. Limited time
            offer—shop now and save on your groceries!
          </p>
          <div className="inline-block">
             <Button content="Get Discounts"/>
          </div>
        </div>

      </div>
    </section>
  );
};

export default Discounts;