import React from 'react'
import gsap from 'gsap'
import { useGSAP } from '@gsap/react'
import { ScrollTrigger } from 'gsap/all'
gsap.registerPlugin(ScrollTrigger);

const ServiceCard = ({imgURL,label,subtext}) => {
  useGSAP(()=> {
    gsap.to("#gsap5",{
      opacity:1,
      y:0,
      duration:0.5,
      stagger:0.1,
      scrollTrigger:"#gsap5"
    })
    
  },[])

  return (
    <div id='gsap5' className='flex-1 sm:w-[350px] sm:min-w-[350px] w-full rounded-[20px] shadow-3xl px-10 py-16 opacity-0 translate-y-36'>
      <div id='gsap5' className='w-11 h-11 rounded-full flex items-center justify-center bg-coral-red opacity-0 translate-y-36 '>
        <img  src={imgURL} alt={label} />
      </div>
      <h3  id='gsap5'  className='text-3xl font-bold pt-3 opacity-0 translate-y-36'>{label}</h3>
      <p id='gsap5' className='text-slate-gray text-xl pt-3 opacity-0 translate-y-36'>{subtext}</p>
    </div>
  )
}

export default ServiceCard
