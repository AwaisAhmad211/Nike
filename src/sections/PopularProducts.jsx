import React from 'react'
import PopularProductCard from '../components/PopularProductCard'
import { products } from '../constants'
import gsap from 'gsap'
import { useGSAP } from '@gsap/react'
import { ScrollTrigger } from 'gsap/all'
gsap.registerPlugin(ScrollTrigger);

const PopularProducts = () => {
  useGSAP(()=> {
    gsap.from("#gsap",{
      opacity:0,
      y:100,
      duration:1,
      stagger: 0.5,
      scrollTrigger : "#gsap"
    })
    gsap.from("#gsap2",{
      opacity:0,
      y:100,
      duration:1,
      stagger: 0.5,
      scrollTrigger : "#gsap2"
    })
  },[])

  return (
    <section className='padding-x w-full p-[180px]'>
      <div className='flex flex-1 flex-col'>
        <h3  id='gsap' className='text-4xl font-bold leading-normal'>Our <span className='text-coral-red'>Popular</span> Products</h3>
        <p id='gsap' className='text-md text-slate-gray pt-7 leading-normal'>Experience top-notch quality and style with our sought-after selections.<br/> Discover a world of comfort, design, and value</p>
        <div className='grid gap-4 pt-16 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 grid-cols-1'>
          {
            products.map((product,index)=>(
              <div id='gsap2' key={index}>
                <PopularProductCard {...product}/>
              </div>
            ))
          }
        </div>
      </div>
    </section>
  )
}

export default PopularProducts
