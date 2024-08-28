import React from 'react'
import { star } from '../assets/icons'
import gsap from 'gsap'
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/all'
gsap.registerPlugin(ScrollTrigger);


const PopularProductCard = ({imgURL,name,price}) => {
     useGSAP(()=>{
        gsap.to("#card",{
          opacity:1,
          duration : 0.2,
          scale : 1,
          y:0,
          stagger:0.1,
          scrollTrigger: "#card"
        })
     },[])
  return (
    <div className='pt-7 flex flex-1 justify-center flex-col'>
      <img id='card' src={imgURL} className='opacity-0 scale-[0.5]' />
      <div className='mt-14'>
        <div id='card' className='flex items-start gap-2 opacity-0 translate-y-12 '>
            <img src={star} alt="Stars" />
             <p className='text-xl text-slate-gray font-semibold'>(4.5)</p>
        </div>
        <h3  id='card' className='card text-2xl font-bold pt-3 opacity-0 translate-y-12'>{name}</h3>
        <p id='card' className='text-2xl text-coral-red font-bold pt-3 opacity-0 translate-y-12'>{price}</p>
      </div>
    </div>
  )
}

export default PopularProductCard
