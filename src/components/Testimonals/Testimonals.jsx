import React from "react";

// --- 1. IMPORTS ---
// Import Swiper React components and modules
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";

// Import icons and images
import { IoIosArrowForward, IoIosArrowBack } from "react-icons/io";
import Customer1 from "../../assets/customer1.jpg";
import Customer2 from "../../assets/customer2.jpg";
import Customer3 from "../../assets/customer3.jpg";
import Customer4 from "../../assets/customer4.jpg";
import Customer5 from "../../assets/customer5.jpg";


// --- 2. PLACEHOLDER HEADING COMPONENT ---
// A simple Heading component. You can replace this with your own.
const Heading = ({ highlight, heading }) => {
  return (
    <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
      <span className="text-orange-500">{highlight}</span>
      {heading}
    </h2>
  );
};


// --- 3. MAIN TESTIMONIALS COMPONENT ---
const Testimonials = () => {
  return (
    <section className="bg-white py-20">
      <div className="max-w-screen-xl w-11/12 mx-auto">
        <Heading highlight="Customers " heading="Saying" />

        {/* Custom Navigation Buttons */}
        <div className="flex justify-end py-5 gap-x-3">
          <button className="custom-prev text-2xl text-zinc-800 rounded-lg w-11 h-11 flex justify-center items-center bg-zinc-100 hover:bg-gradient-to-b hover:from-orange-400 hover:to-orange-500 hover:text-white cursor-pointer transition-colors duration-300">
            <IoIosArrowBack />
          </button>
          <button className="custom-next text-2xl text-zinc-800 rounded-lg w-11 h-11 flex justify-center items-center bg-zinc-100 hover:bg-gradient-to-b hover:from-orange-400 hover:to-orange-500 hover:text-white cursor-pointer transition-colors duration-300">
            <IoIosArrowForward />
          </button>
        </div>

        {/* Swiper Carousel */}
        <Swiper
          // Enable looping for a seamless autoplay experience
          loop={true}

          // Configure Autoplay
          autoplay={{
            delay: 3000, // Time in ms between slides (3 seconds)
            disableOnInteraction: false, // Autoplay continues after user interaction
          }}

          // Configure Navigation to use custom buttons
          navigation={{
            nextEl: ".custom-next",
            prevEl: ".custom-prev",
          }}

          // Activate the necessary modules
          modules={[Navigation, Autoplay]}
          className="mySwiper"

          // Responsive Breakpoints
          breakpoints={{
            640: { slidesPerView: 1, spaceBetween: 20 },
            768: { slidesPerView: 2, spaceBetween: 30 },
            1024: { slidesPerView: 3, spaceBetween: 40 },
          }}
        >
          {review.map((item) => (
            <SwiperSlide key={item.id} className="bg-zinc-100 rounded-xl p-8 mb-4 h-auto">
              <div className="flex items-center gap-x-4">
                <div className="w-16 h-16 rounded-full ring-4 ring-orange-500 overflow-hidden">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div>
                  <h5 className="text-xl font-bold text-zinc-900">{item.name}</h5>
                  <p className="text-zinc-600">{item.profession}</p>
                  <span className="text-yellow-500">{'⭐'.repeat(item.rating)}</span>
                </div>
              </div>
              <div className="mt-8">
                <p className="text-zinc-700 italic">"{item.para}"</p>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default Testimonials;


// --- 4. DATA ARRAY ---
const review = [
  {
    id: 1,
    name: "Ananya Rao",
    profession: "Home Chef",
    rating: 5,
    para: "The quality of fresh produce here is unmatched. I always find the freshest vegetables and a wide variety of herbs and spices for my recipes. The store is clean and well-organized, making it my first choice for weekly groceries.",
    image: Customer1,
  },
  {
    id: 2,
    name: "Sameer Verma",
    profession: "Busy Parent",
    rating: 5,
    para: "As a working parent, the convenience this store offers is a lifesaver. The aisles are logically arranged, so I can get in and out quickly. Their selection of ready-to-cook meals and healthy snacks for my kids is fantastic.",
    image: Customer2,
  },
  {
    id: 3,
    name: "Dr. Priya Sharma",
    profession: "Nutritionist",
    rating: 4,
    para: "I'm impressed with the extensive organic section and the clear nutritional labeling on products. They stock a great range of millets, pulses, and healthy oils. A great place to recommend to my clients for making healthier choices.",
    image: Customer3,
  },
  {
    id: 4,
    name: "Rahul Kumar",
    profession: "College Student",
    rating: 4,
    para: "This store is perfect for my budget. The prices are reasonable, and there are always good deals on essentials like rice, atta, and dal. It has everything I need for my daily meals without being too expensive.",
    image: Customer4,
  },
  {
    id: 5,
    name: "Fatima Sheikh",
    profession: "Cafe Owner",
    rating: 5,
    para: "I source many ingredients for my cafe from here, especially dairy and baked goods. The freshness is consistent, and the staff is always helpful with my bulk orders. Their reliable quality helps my business thrive.",
    image: Customer5,
  },
];