import React from 'react'
import { star } from '../assets/icons'

const ReviewCard = ({imgURL,customerName,rating,feedback}) => {
  return (
    <div className='flex flex-col flex-wrap items-center justify-center text-center mt-20 max-w-[400px]'>
      <img src={imgURL} alt="CustomerImg" width={130} height={130} className='object-cover rounded-full' />
      <p className='mt-4 info-text'>{feedback}</p>
      <div className='flex items-start gap-2 mt-4 tex-xl '>
            <img src={star} alt="Stars" width={24} height={24} />
             <p className='text-xl text-slate-gray font-semibold'>{`(${rating})`}</p>
        </div>
      <h3 className='text-3xl font-bold mt-3'>{customerName}</h3>
    </div>
  )
}

export default ReviewCard
