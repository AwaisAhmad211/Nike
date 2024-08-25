import React from 'react'
import Button from '../components/Button'
import { shoe8 } from '../assets/images'


const SuperQuality = () => {
  return (
    <section className='padding-x w-full'>
      <div className='flex flex-col lg:flex-row items-center justify-center gap-16'>
        <div className='flex-1 items-start'>
          <h1 className='text-4xl leading-tight font-bold'>We Provide You <span className='text-coral-red'>Super Quality</span> Shoes</h1>
          <p className='text-xl text-slate-gray pt-5'>Ensuring premium comfort and style, our meticulously crafted footwear is designed to elevate your experience, providing you with unmatched quality, innovation, and a touch of elegance.</p>
          <p className='text-xl text-slate-gray pt-5'>Our dedication to detail and excellence ensures your satisfaction</p>
          <Button
          label={"View Details"}
          />
        </div>
        <div className='flex-1'>
           <img
            src={shoe8}
            alt="Shoe8"
            width={570}
            height={522}
            className='object-contain'
            />
        </div>
      </div>
    </section>
  )
}

export default SuperQuality
