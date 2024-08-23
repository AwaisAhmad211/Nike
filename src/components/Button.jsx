import React from 'react'
import { arrowRight } from '../assets/icons'


const Button = () => {
  return (
    
            <button className='sm:mx-16 mx-8 mt-10 bg-coral-red rounded-full border-2 border-coral-red text-white text-sm p-1 flex gap-2'>Shop Now <img src={arrowRight} alt="Arrow" width={18} height={18} /></button>
  )
}

export default Button
