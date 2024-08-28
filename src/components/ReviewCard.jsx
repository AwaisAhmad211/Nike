import React from 'react'
import { star } from '../assets/icons'
import { ScrollTrigger } from 'gsap/all'
import gsap from 'gsap'
import { useGSAP } from '@gsap/react'
gsap.registerPlugin(ScrollTrigger)

const ReviewCard = ({imgURL,customerName,rating,feedback}) => {
   useGSAP(()=> {
    gsap.to("#RI",{
      opacity:1,
      duration:1,
      scale:1,
      scrollTrigger:"#RI"
    })
    gsap.to("#gsap8",{
      opacity:1,
      duration:0.3,
      stagger:0.3,
      y:0,
      scrollTrigger:"#gsap8"
    })
   },[])

  return (
    <div className='flex flex-col flex-wrap items-center justify-center text-center mt-20 max-w-[400px]'>
      <img id='RI' src={imgURL} alt="CustomerImg" width={130} height={130} className='object-cover rounded-full opacity-0 scale-[0.5]'/>
      <p id='gsap8' className='mt-4 info-text opacity-0 translate-y-20'>{feedback}</p>
      <div className='flex items-start gap-2 mt-4 tex-xl '>
            <img id='gsap8' src={star} alt="Stars" width={24} height={24} className='opacity-0 translate-y-20' />
             <p id='gsap8' className='text-xl text-slate-gray font-semibold opacity-0 translate-y-20'>{`(${rating})`}</p>
        </div>
      <h3 id='gsap8' className='text-3xl font-bold mt-3 opacity-0 translate-y-20'>{customerName}</h3>
    </div>
  )
}

export default ReviewCard
