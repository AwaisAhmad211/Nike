import React from 'react'

const ServiceCard = ({imgURL,label,subtext}) => {
  return (
    <div className='flex-1 sm:w-[350px] sm:min-w-[350px] w-full rounded-[20px] shadow-3xl px-10 py-16'>
      <div className='w-11 h-11 rounded-full flex items-center justify-center bg-coral-red '>
        <img src={imgURL} alt={label} />
      </div>
      <h3 className='text-3xl font-bold pt-3'>{label}</h3>
      <p className='text-slate-gray text-xl pt-3'>{subtext}</p>
    </div>
  )
}

export default ServiceCard
