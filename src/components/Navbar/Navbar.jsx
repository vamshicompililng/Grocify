import React, { useEffect, useState } from 'react';
import { GoHeartFill } from "react-icons/go";
import { HiShoppingBag } from "react-icons/hi2";
import { IoSearch } from "react-icons/io5";
import { TbMenu2 } from "react-icons/tb";
import { TbMenu3 } from "react-icons/tb";
const App = () => {

  const [showMenu, setShowMenu] = useState(false);
  const[isScrolled, setIsScrolled] = useState(false);


  
  const toggleMenu = () => {
  setShowMenu(!showMenu);
};

useEffect(() => {
  const handleScroll = () => {
    if (window.scrollY > 0) {
      setIsScrolled(true);
    } else {
      setIsScrolled(false);
    }
  };

  window.addEventListener('scroll', handleScroll);

  // Cleanup on unmount
  return () => {
    window.removeEventListener('scroll', handleScroll);
  };
}, []);

  return (




    <div>
<header className={`bg-white fixed top-0 right-0 left-0 z-50 ${isScrolled ? 'shadow-lg' : ''}`}>
        <nav className="max-w-[1400px] mx-auto px-10 md:h-[14vh] h-[12vh] flex justify-between items-center">
          <a href="#" className="text-3xl font-bold">
            Gr<span className="text-orange-500 uppercase">o</span>cify
          </a>
          <ul className="md:flex items-center gap-x-15 hidden">
            <li>
              <a
                href="#"
                className="font-semibold tracking-wider text-orange-500"
              >
                Home
              </a>
            </li>
            <li>
              <a
                href="#"
                className="font-semibold tracking-wider text-zinc-800 hover:text-orange-500"
              >
                About Us
              </a>
            </li>
            <li>
              <a
                href="#"
                className="font-semibold tracking-wider text-zinc-800  hover:text-orange-500"
              >
                Process
              </a>
            </li>
            <li>
              <a
                href="#"
                className="font-semibold tracking-wider text-zinc-800  hover:text-orange-500"
              >
                Contact Us
              </a>
            </li>
          </ul>

          {/* Nav action */}
          <div className="flex items-center gap-x-5">
            {/* input field */}
            <div className="md:flex items-center gap-x-2 border-2 border-orange-500 rounded-full px-2 py-1 w-full max-w-md hidden">
              <input type="text" name="text" id="text" placeholder="Search..."autoComplete="off"
                className="flex-1 h-12 px-4 text-base rounded-full focus:outline-none"
              />
              <button className="w-12 h-12 bg-gradient-to-b from-red-600 to-orange-500 text-white flex items-center justify-center rounded-full text-xl hover:brightness-110 transition-all duration-300">
                <IoSearch />
              </button>
            </div>

            <a
              href="#"
              className="text-2xl text-zinc-800 transition-all duration-300"
            >
              <GoHeartFill />
            </a>

            <a
              href="#"
              className="text-2xl text-zinc-800 transition-all duration-300"
            >
              <HiShoppingBag />
            </a>
              {/* hamburger */}
            <a href="#"  className="text-3xl text-zinc-800 transition-all duration-300 md:hidden " onClick={toggleMenu}>
              {showMenu ? <TbMenu3  /> : <TbMenu2 />}
            </a>
          </div>

          {/* Mobile menu */}
           <ul className={`flex flex-col gap-y-12  bg-orange-500/15 backdrop-blur-xl p-10 items-center gap-x-15 md:hidden absolute top-30 -left-full  transform -translate-x-1/2 rounded-lg shadow-lg transition-all duration-500  ${showMenu ? 'left-1/2':" "}`} >
            <li> 
              <a
                href="#"
                className="font-semibold tracking-wider text-orange-500"
              >
                Home
              </a>
            </li>
            <li>
              <a
                href="#"
                className="font-semibold tracking-wider text-zinc-800 hover:text-orange-500"
              >
                About Us
              </a>
            </li>
            <li>
              <a
                href="#"
                className="font-semibold tracking-wider text-zinc-800  hover:text-orange-500"
              >
                Process
              </a>
            </li>
            <li>
              <a
                href="#"
                className="font-semibold tracking-wider text-zinc-800  hover:text-orange-500"
              >
                Contact Us
              </a>
            </li>
             <li className="flex items-center gap-x-2 border-2 border-orange-500 rounded-full px-2 py-1 w-full max-w-md md:hidden">
              <input type="text" name="text" id="text" placeholder="Search..."autoComplete="off"
                className="flex-1 h-12 px-4 text-base rounded-full focus:outline-none"
              />
              <button className="w-12 h-12 bg-gradient-to-b from-red-600 to-orange-500 text-white flex items-center justify-center rounded-full text-xl hover:brightness-110 transition-all duration-300">
                <IoSearch />
              </button>
            </li>
          </ul>
        </nav>
      </header>
    </div>
  );
};

export default App;
