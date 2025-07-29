import React from 'react'
import Heading from '../Heading/Heading'
import { TbCircleNumber1Filled,TbCircleNumber2Filled,TbCircleNumber3Filled,TbCircleNumber4Filled } from "react-icons/tb";
import { MdFactory } from "react-icons/md";
import { SlBadge } from "react-icons/sl";
import { CiDeliveryTruck } from "react-icons/ci";

import { PiPlantBold } from "react-icons/pi";


const Process = () => {

    const renderSteps=steps.map(item=>{
        return(
            // On mobile: each step takes full width.
            // On medium screens and up (md): steps become flexible (md:flex-1)
            // and the staggered margin is applied (md:-mt-100).
            <div key={item.id} className={`w-full md:flex-1 ${item.id % 2 === 0 ? 'md:-mt-100':'' }`}>
                <span className='flex justify-center items-center w-18 h-18 rounded-full text-8xl bg-zinc-800 text-white outline-[3px] outline-offset-7 outline-zinc-800 outline-dashed mx-auto' > {item.number}</span>
                <div className='flex items-center gap-x-5 mt-10 '>
                        <span className='flex justify-center items-center text-3xl bg-gradient-to-b from-orange-400 to-orange-600 text-white w-15 h-15 rounded-full'>{item.icon}</span>
                    <div className='flex-1'>
                        <h4 className='text-zinc-800 text-2xl font-bold'>{item.title}</h4>
                        <p className='text-zinc-600 '>{item.para}</p>
                    </div>
                </div>
            </div>
        )
    })
  return (
    <section>
        <div className='max-w-[1400px] mx-auto px-10 py-20'>
            <div className='w-fit mr-auto'>
                <Heading highlight="Our" heading="Process"/>
            </div>

            {/*
              On mobile: Use flex-col to stack items vertically with a gap (gap-y-16).
              On medium screens and up (md): Switch back to flex-row and remove the vertical gap.
            */}
            <div className='flex flex-col md:flex-row gap-y-16 md:gap-y-0 mt-20 items-center justify-center md:pt-50'>
             {renderSteps}
            </div>

        </div>
    </section>
  )
}

export default Process


const steps = [
    {
        id: 1,
        number: <TbCircleNumber1Filled />,
        title: "Sourcing",
        para: "We select only the finest raw materials from trusted and sustainable partners.",
        icon: <PiPlantBold />
    },
    {
        id: 2,
        number: <TbCircleNumber2Filled />,
        title: "Manufacturing",
        para: "Our state-of-the-art facilities transform materials into high-quality products.",
        icon: <MdFactory />
    },
    {
        id: 3,
        number: <TbCircleNumber3Filled />,
        title: "Quality Control",
        para: "Every product undergoes rigorous testing to ensure it meets our exacting standards.",
        icon: <SlBadge />

    },
    {
        id: 4,
        number: <TbCircleNumber4Filled />,
        title: "Logistics",
        para: "We ensure your products are delivered safely and efficiently to your doorstep.",
        icon: <CiDeliveryTruck />
    },
];