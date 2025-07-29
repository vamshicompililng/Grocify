import React from "react";
import Heading from "../Heading/Heading";
import Fruits from "../../assets/fruits-and-veggies.png";
import Meat from "../../assets/meat-and-seafood.png";
import Dairy from "../../assets/dairy-and-eggs.png";
import { Link } from "react-router-dom";

const Category = () => {
  const renderCards = category.map((card) => {
    return (
      <div className="flex-1 basis-[300px]" key={card.id}>
        <div className=" w-full min-h-[30vh] relative -mb-10">
          {/* card image */}
          <img src={card.image} className="absolute bottom-0" />
        </div>
        {/* card content */}
        <div className="bg-zinc-100 pt-17 p-8 rounded-lg">
          <h3 className="bg-zinc-100 text-3xl font-bold">{card.title}</h3>
          <p className="text-zinc-600 mt-3 mb-9">{card.description}</p>
          <Link
            to={card.path}
            className="bg-gradient-to-b from-red-600 to-orange-500 text-white px-8 py-3 rounded-full md:text-lg text-md font-semibold hover:brightness-110 transition-all duration-300 cursor-pointer"
          >
            See All
          </Link>
        </div>
      </div>
    );
  });
  return (
    <section className="max-w-[1400px] mx-auto px-10 py-20">
      <div className="py-20 ">
        <Heading highlight="Shop" heading="by Category" />
        {/* category cards */}
        <div className="flex flex-wrap  gap-10 md:mt-15">{renderCards}</div>
      </div>
    </section>
  );
};

export default Category;

const category = [
  {
    id: 1,
    title: "Fruits & Veges",
    description:
      "Fresh and organic fruits and vegetables sourced from the best farms.",
    image: Fruits,
    path:'/Fruits'
  },
  {
    id: 2,
    title: "Diary & Eggs",
    description:
      "High-quality dairy products and eggs, ensuring freshness and taste.",
    image: Dairy,
     path:'/Dairy'
  },
  {
    id: 3,
    title: "Meat & Seafood",
    description:
      "High-quality meat and seafood products, ensuring freshness and flavor.",
    image: Meat,
     path:'/Seafood'
  },
];
