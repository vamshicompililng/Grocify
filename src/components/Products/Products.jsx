import React, { useState } from "react"; // Import useState
import Heading from "../Heading/Heading";
import Button from "../Buttons/Button";
import { FaRupeeSign, FaHeart, FaPlus } from "react-icons/fa";

// All product images are imported with .png extension
import strawberry from "../../assets/strawberry.png";
import broccoli from "../../assets/broccoli.png";
import milk from "../../assets/milk.png";
import tofu from "../../assets/tofu.png";
import shrimp from "../../assets/shrimp.png";
import pineapple from "../../assets/pineapple.png";
import sliceCheese from "../../assets/slice-cheese.png";
import ricottaCheese from "../../assets/ricotta-cheese.png";
import tilapia from "../../assets/tilapia.png";
import yogurt from "../../assets/yogurt.png";
import salmon from "../../assets/salmon.png";
import lettuce from "../../assets/lettuce.png";
import kiwi from "../../assets/kiwi.png";
import kale from "../../assets/kale.png";
import grapes from "../../assets/grapes.png";
import banana from "../../assets/banana.png";
import capsicum from "../../assets/capsicum.png";
import eggplant from "../../assets/eggplant.png";
import cabbage from "../../assets/cabbage.png";
import chickenBreast from "../../assets/chicken-breast.png";
import beef from "../../assets/beef.png";
import condensedMilk from "../../assets/condensed-milk.png";
import cheese from "../../assets/cheese.png";
import {Link} from 'react-router-dom'

const productData = [
  // Fruits
  {
    id: 1,
    title: "Strawberry",
    price: 120,
    image: strawberry,
    category: "Fruits",
  },
  {
    id: 2,
    title: "Pineapple",
    price: 70,
    image: pineapple,
    category: "Fruits",
  },
  { id: 12, title: "Kiwi", price: 110, image: kiwi, category: "Fruits" },
  { id: 13, title: "Grapes", price: 85, image: grapes, category: "Fruits" },
  { id: 16, title: "Banana", price: 50, image: banana, category: "Fruits" },

  // Vegetables
  {
    id: 3,
    title: "Broccoli",
    price: 80,
    image: broccoli,
    category: "Vegetables",
  },
  {
    id: 14,
    title: "Lettuce",
    price: 45,
    image: lettuce,
    category: "Vegetables",
  },
  { id: 15, title: "Kale", price: 65, image: kale, category: "Vegetables" },
  {
    id: 17,
    title: "Capsicum",
    price: 60,
    image: capsicum,
    category: "Vegetables",
  },
  {
    id: 18,
    title: "Eggplant",
    price: 40,
    image: eggplant,
    category: "Vegetables",
  },
  {
    id: 19,
    title: "Cabbage",
    price: 30,
    image: cabbage,
    category: "Vegetables",
  },

  // Dairy
  { id: 4, title: "Tofu", price: 90, image: tofu, category: "Dairy" },
  { id: 5, title: "Yogurt", price: 50, image: yogurt, category: "Dairy" },
  {
    id: 6,
    title: "Cheese Slices",
    price: 150,
    image: sliceCheese,
    category: "Dairy",
  },
  {
    id: 7,
    title: "Ricotta Cheese",
    price: 220,
    image: ricottaCheese,
    category: "Dairy",
  },
  { id: 8, title: "Milk Carton", price: 60, image: milk, category: "Dairy" },
  {
    id: 22,
    title: "Condensed Milk",
    price: 130,
    image: condensedMilk,
    category: "Dairy",
  },
  {
    id: 23,
    title: "Cheese Block",
    price: 180,
    image: cheese,
    category: "Dairy",
  },

  // Seafood
  {
    id: 9,
    title: "Salmon Fillet",
    price: 700,
    image: salmon,
    category: "Seafood",
  },
  { id: 10, title: "Shrimp", price: 450, image: shrimp, category: "Seafood" },
  {
    id: 11,
    title: "Tilapia Fish",
    price: 350,
    image: tilapia,
    category: "Seafood",
  },

  // Meat
  {
    id: 20,
    title: "Chicken Breast",
    price: 250,
    image: chickenBreast,
    category: "Meat",
  },
  { id: 21, title: "Beef Steak", price: 450, image: beef, category: "Meat" },
];

const Products = () => {
  const categories = [
    "All",
    "Fruits",
    "Vegetables",
    "Dairy",
    "Seafood",
    "Meat",
  ];

  const [activeTab, setActiveTab] = useState("All");
  // NEW: State to manage the number of items to show
  const [itemsToShow, setItemsToShow] = useState(8);

  const filteredProducts =
    activeTab === "All"
      ? productData
      : productData.filter((product) => product.category === activeTab);

  // NEW: Function to handle changing tabs and resetting item count
  const handleTabClick = (category) => {
    setActiveTab(category);
    setItemsToShow(8); // Reset to initial count when tab changes
  };

  return (
    <section>
      <div className="max-w-[1400px] mx-auto px-10 py-20">
        <Heading highlight="Our" heading="Products" />

        {/* tabs */}
        <div className="flex items-center justify-center flex-wrap gap-4 mt-8">
          {categories.map((category) => (
            <button
              key={category}
              className={`justify-center bg-zinc-100 px-6 py-3 rounded-full font-semibold tracking-wider hover:bg-gradient-to-r hover:from-orange-500 hover:to-red-500 hover:text-white transition-all duration-300 cursor-pointer
                 ${
                   activeTab === category
                     ? "bg-gradient-to-r from-orange-500 to-red-500 text-white"
                     : "text-zinc-800"
                 }`}
              onClick={() => handleTabClick(category)}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Product Grid */}
        {/* MODIFICATION: Slicing the array before mapping */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 mt-12">
          {filteredProducts.length > 0 ? (
            filteredProducts.slice(0, itemsToShow).map((product) => (
              <div
                key={product.id}
                className="bg-white rounded-lg shadow-md overflow-hidden transform hover:scale-105 transition-transform duration-300 flex flex-col"
              >
                <div className="h-48 flex items-center justify-center bg-gray-50 overflow-hidden relative">
                  <img
                    src={product.image}
                    alt={product.title}
                    className="h-full w-full object-contain p-4"
                  />

                  <button
                    className="absolute top-2 left-2 bg-white/80 p-2 rounded-full text-zinc-600 hover:text-red-500 transition-all duration-300"
                    aria-label="Like item"
                  >
                    <FaHeart size={20} />
                  </button>

                  <button
                    className="absolute top-2 right-2 group flex h-9 w-9 items-center justify-center rounded-md border-2 border-zinc-400 bg-white/80 transition-all duration-300 hover:border-orange-500 hover:bg-orange-500"
                    aria-label="Add item"
                  >
                    <FaPlus
                      className="text-zinc-600 transition-colors duration-300 group-hover:text-white"
                      size={16}
                    />
                  </button>
                </div>

                <div className="p-4 text-center flex flex-col flex-grow">
                  <h3 className="text-xl font-semibold text-zinc-800">
                    {product.title}
                  </h3>
                  <div className="flex items-center justify-center text-lg mt-2 text-red-500">
                    <FaRupeeSign />
                    <span className="ml-1 font-bold">{product.price}</span>
                  </div>

                  <div className="flex-grow" />

                  <div className="w-full mt-4 pt-4 border-t border-gray-200">
                    <Button content="Shop Now" />
                  </div>
                </div>
              </div>
            ))
          ) : (
            <div className="col-span-full text-center py-10">
              <p className="text-zinc-500 text-xl">
                No products found in this category.
              </p>
            </div>
          )}
        </div>

        {/* NEW: Conditional "View All" Button */}
        {filteredProducts.length > itemsToShow && (
          <div className="text-center mt-12">
            <Link
              to='/AllProducts'
              className="bg-gradient-to-b from-red-600 to-orange-500 text-white px-8 py-3 rounded-full md:text-lg text-md font-semibold hover:brightness-110 transition-all duration-300 cursor-pointer"
            >
              View All
            </Link>
          </div>
        )}
      </div>
    </section>
  );
};

export default Products;
