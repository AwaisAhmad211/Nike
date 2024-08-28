import React from 'react'
import { reviews } from '../constants'
import ReviewCard from '../components/ReviewCard'
import { ScrollTrigger } from 'gsap/all'
import gsap from 'gsap'
import { useGSAP } from '@gsap/react'
gsap.registerPlugin(ScrollTrigger)

const CustomerReviews = () => {
  useGSAP(()=> {
    gsap.from("#gsap7",{
     opacity:0,
     y:100,
     duration:0.5,
     stagger:0.5,
     scrollTrigger: "#gsap7"
    })
    gsap.from("#SI",{
     opacity:0,
     scale:0.5,
     duration:0.5,
     delay:1,
     scrollTrigger: "#SI"
    })
   },[])
  return (
    <section className='bg-pale-blue w-full mt-24 '>
        <div className='flex flex-col text-center items-center justify-center padding-x'>
      <div className='flex flex-col items-center justify-center '>
         <h1 id='gsap7' className='text-4xl pt-20 leading-tight font-bold'>What Our <span className='text-coral-red'>Customers</span> Say? </h1>
         <p id='gsap7' className='mt-4 info-text max-w-[500px]'>Hear genuine stories from our satisfied customers about their exceptional experiences with us.</p>
      </div>
      <div className='flex flex-col lg:flex-row lg:gap-24 gap-10'>
        {
            reviews.map((review)=>(
                <ReviewCard  key={review.customerName} {...review}/>
            ))
        }
      </div> 
        </div>
    </section>
  )
}

export default CustomerReviews
