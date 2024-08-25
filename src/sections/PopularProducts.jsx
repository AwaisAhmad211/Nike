import React from 'react'
import PopularProductCard from '../components/PopularProductCard'
import { products } from '../constants'

const PopularProducts = () => {
  return (
    <section className='padding-x w-full h-screen p-[180px]'>
      <div className='flex flex-1 flex-col'>
        <h3 className='text-4xl font-bold leading-normal'>Our <span className='text-coral-red'>Popular</span> Products</h3>
        <p className='text-md text-slate-gray pt-7 leading-normal'>Experience top-notch quality and style with our sought-after selections.<br/> Discover a world of comfort, design, and value</p>
        <div className='grid gap-4 pt-16 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 grid-cols-1'>
          {
            products.map((product,index)=>(
              <PopularProductCard key={index} {...product}/>
            ))
          }
        </div>
      </div>
    </section>
  )
}

export default PopularProducts
