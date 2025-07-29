import React from 'react'
import Heading from '../Heading/Heading'
import { FaHeart } from "react-icons/fa";
import { AiOutlineSafety } from "react-icons/ai";
import { FaSeedling } from "react-icons/fa";
import { SiTrustpilot } from "react-icons/si";

import Basket from '../../assets/basket-full-vegetables.png'


const Values = () => {

    const leftValues=value.slice(0,2).map(item=>{
        return(
            <div  key={item.id}className='flex  md:flex-row-reverse items-center gap-7 '>
                <div>
                    <span className='flex justify-center items-center  text-3xl text-white bg-gradient-to-b from-orange-400 to bg-orange-500 w-15 h-15 rounded-full '>{item.icon}</span>
                </div>
                <div className='md:text-right'>
                    <h3 className='text-zinc-800 text-3xl font-bold '>{item.title}</h3>
                    <p className='text-zinc-600 mt-2'>{item.description}</p>
                </div>
            </div>
        )
    })


    const RightValues=value.slice(2).map(item=>{
        return(
            <div   key={item.id} className='flex items-center gap-7  ' >
                <div>
                    <span className='flex justify-center items-center  text-3xl text-white bg-gradient-to-b from-orange-400 to bg-orange-500 w-15 h-15 rounded-full '>{item.icon}</span>
                </div>
                <div >
                    <h3 className='text-zinc-800 text-3xl font-bold '>{item.title}</h3>
                    <p className='text-zinc-600 mt-2'>{item.description}</p>
                </div>
            </div>
        )
    })
  return (
    <section>
        <div className='max-w-[1400px] mx-auto px-10 py-20'>
             <Heading highlight="Our" heading="Value"/>

             <div className='flex md:flex-row flex-col items-center gap-10 md:gap-0 justify-between mt-20'>
                {/* left values */}
                <div className='md:min-h-100  gap-15 flex  flex-col justify-between ' >
                    {leftValues}
                </div>
                <div className='md:flex w-1/2 hidden justify-center items-center relative'>
                    <img src={Basket}/>
                </div>
                {/* right values */}
                <div className='md:min-h-100 gap-15 flex  flex-col justify-between ' > 
                    {RightValues}
                </div>
             </div>
        </div>
    </section>
  )
}

export default Values



const value=[ 
    {
        id:1,
        title:"Quality",
        description:"We ensure the highest quality standards for all our products, sourced from trusted farms.",
        icon:<FaHeart />
    },

     {
        id:2,
        title:"Trust",
        description:"We build trust with our customers by providing transparency and quality in every product we offer.",
        icon:<SiTrustpilot />
    },

     {
        id:3,
        title:"Food Safety",
        description:"We prioritize food safety by adhering to strict hygiene and quality standards in all our processes.",
        icon:<AiOutlineSafety />
    },

     {
        id:4,
        title:"Fresh",
        description:"We deliver fresh produce daily, ensuring that our customers receive the best quality fruits and vegetables.",
        icon:<FaSeedling />
    }

];