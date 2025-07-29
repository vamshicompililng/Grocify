import React from 'react'

const Button = (props) => {
  return (
   <button className='bg-gradient-to-b from-red-600 to-orange-500 text-white px-8 py-3 rounded-full md:text-lg text-md font-semibold hover:brightness-110 transition-all duration-300 cursor-pointer'>
   {props.content}</button>
  )
}

export default Button
