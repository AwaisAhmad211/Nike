import React from 'react'
import { star } from '../assets/icons'

const PopularProductCard = ({imgURL,name,price}) => {
  return (
    <div className='pt-7 flex flex-1 justify-center flex-col'>
      <img src={imgURL} />
      <div className='mt-14'>
        <div className='flex items-start gap-2 '>
            <img src={star} alt="Stars" />
             <p className='text-xl text-slate-gray font-semibold'>(4.5)</p>
        </div>
        <h3 className='text-2xl font-bold pt-3'>{name}</h3>
        <p className='text-2xl text-coral-red font-bold pt-3'>{price}</p>
      </div>
    </div>
  )
}

export default PopularProductCard
