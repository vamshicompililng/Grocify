import React from 'react'

const Heading = (props) => {
  return (
    <div>
       <div className='w-fit mx-auto max-w-[1400px] px-10'>
        <h2 className=' text-zinc-800 md:text-5xl text-[2.5rem]font-bold'>
            <span className='text-orange-500 font-bold'>{props.highlight}</span> {props.heading}
        </h2>
        <div className='w-34 h-1 bg-orange-300 md:mt-6 mt-3 ml-auto'></div>
     </div>
    </div>
  )
}

export default Heading
