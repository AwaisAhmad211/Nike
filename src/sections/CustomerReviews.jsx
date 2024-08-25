import React from 'react'
import { reviews } from '../constants'
import ReviewCard from '../components/ReviewCard'

const CustomerReviews = () => {
  return (
    <section className='bg-pale-blue w-full mt-24 '>
        <div className='flex flex-col text-center items-center justify-center padding-x'>
      <div className='flex flex-col items-center justify-center '>
         <h1 className='text-4xl pt-20 leading-tight font-bold'>What Our <span className='text-coral-red'>Customers</span> Say? </h1>
         <p className='mt-4 info-text max-w-[500px]'>Hear genuine stories from our satisfied customers about their exceptional experiences with us.</p>
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
