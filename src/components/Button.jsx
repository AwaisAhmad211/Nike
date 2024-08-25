import React from 'react'
import { arrowRight } from '../assets/icons'


const Button = ({label}) => {
  return (
    
            <button className='text-xl text-center items-center mt-10 bg-coral-red rounded-full border-2 border-coral-red text-white py-3 px-7 flex gap-2'> {label} <img src={arrowRight} alt="Arrow" width={18} height={18} className='hover:rotate-[360] duration-500 rotate-180'/></button>
  )
}

export default Button
