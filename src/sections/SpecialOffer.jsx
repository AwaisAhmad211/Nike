import React from 'react'
import Button from '../components/Button'
import { offer } from '../assets/images'
import { arrowRight } from '../assets/icons'

const SpecialOffer = () => {
  return (
    <section className='padding-x w-full'>
      <div className='flex flex-col xl:flex-row-reverse items-center justify-center gap-16'>
        <div className='flex-1 items-start'>
          <h1 className='text-4xl leading-tight font-bold'><span className='text-coral-red'>Special</span> Offer</h1>
          <p className='text-xl text-slate-gray pt-5'>Embark on a shopping journey that redefines your experience with unbeatable deals. From premier selections to incredible savings, we offer unparalleled value that sets us apart.</p>
          <p className='text-xl text-slate-gray pt-5'>Embark on a shopping journey that redefines your experience with unbeatable deals. From premier selections to incredible savings, we offer unparalleled value that sets us apart.</p>
          <div className='flex gap-4'>
          <Button
          label={"Shop Now"}
          arrowRight={arrowRight}
          />
          <Button
           label={"Learn more"}
           backgroundColor={"bg-white"}
           borderColor={"border-slate-gray"}
           textColor={"border-slate-gray"}

           />
          </div>
        </div>
        <div className='flex-1'>
           <img
            src={offer}
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

export default SpecialOffer
