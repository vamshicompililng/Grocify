import React from "react";
import { IoIosSend } from "react-icons/io";

const Footer = () => {
  return (
    <footer className="bg-zinc-100 py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-[1400px] mx-auto">
        {/* Main flex container for all footer content */}
        <div className="flex flex-wrap justify-between gap-10 lg:gap-6">
          
          {/* Column 1: Brand Info and Copyright */}
          <div className="flex flex-col w-full md:w-1/2 lg:w-1/4">
            <a href="#" className="text-3xl font-bold mb-4">
              Gr<span className="text-orange-500 uppercase">o</span>cify
            </a>
            <p className="text-zinc-600 max-w-[350px]">
              Bred for a high content of beneficial substances. Our products are
              all fresh and organic, sourced from the best farms.
            </p>
            <p className="text-zinc-800 mt-8 text-sm">
              &copy; {new Date().getFullYear()} Grocify. All Rights Reserved.
            </p>
          </div>

          {/* Column 2: Company Links */}
          <div className="w-full sm:w-auto lg:w-[15%]">
            <h5 className="text-zinc-800 text-xl font-bold mb-4">Company</h5>
            <ul className="space-y-3">
              <li>
                <a href="#" className="text-zinc-600 hover:text-orange-500 transition-colors">
                  About Us
                </a>
              </li>
              <li>
                <a href="#" className="text-zinc-600 hover:text-orange-500 transition-colors">
                  FAQs
                </a>
              </li>
               <li>
                <a href="#" className="text-zinc-600 hover:text-orange-500 transition-colors">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Column 3: Support Links */}
          <div className="w-full sm:w-auto lg:w-[15%]">
            <h5 className="text-zinc-800 text-xl font-bold mb-4">Support</h5>
            <ul className="space-y-3">
              <li>
                <a href="#" className="text-zinc-600 hover:text-orange-500 transition-colors">
                  Support Centre
                </a>
              </li>
              <li>
                <a href="#" className="text-zinc-600 hover:text-orange-500 transition-colors">
                  Feedback
                </a>
              </li>
               <li>
                <a href="#" className="text-zinc-600 hover:text-orange-500 transition-colors">
                  Contact Us
                </a>
              </li>
            </ul>
          </div>
          
          {/* ADDED: Column 4: Stay Connected / Newsletter */}
          <div className="w-full md:w-1/2 lg:w-[35%]">
             <h5 className="text-zinc-800 text-xl font-bold mb-4">Stay Connected</h5>
             <p className="text-zinc-600 mb-4">
                Subscribe to our newsletter to get the latest updates on our products and offers.
             </p>
             <form className="flex items-center">
                <input 
                    type="email"
                    placeholder="Enter your email"
                    className="w-full px-4 py-3 border border-zinc-300 rounded-l-md focus:outline-none focus:ring-2 focus:ring-orange-400"
                />
                <button 
                    type="submit"
                    className="bg-orange-500 text-white px-4 py-3 rounded-r-md hover:bg-orange-600 transition-colors flex items-center justify-center cursor-pointer"
                    aria-label="Subscribe"
                >
                   <IoIosSend size={24}/>
                </button>
             </form>
          </div>

        </div>
      </div>
    </footer>
  );
};

export default Footer;