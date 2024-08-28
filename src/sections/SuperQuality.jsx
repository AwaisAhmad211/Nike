import React from 'react'
import Button from '../components/Button'
import { shoe8 } from '../assets/images'
import { ScrollTrigger } from 'gsap/all'
import gsap from 'gsap'
import { useGSAP } from '@gsap/react'
gsap.registerPlugin(ScrollTrigger)

const SuperQuality = () => {
  useGSAP(()=> {
   gsap.from("#gsap3",{
    opacity:0,
    y:100,
    duration:0.5,
    stagger:0.5,
    scrollTrigger: "#gsap3"
   })
   gsap.from("#gsap3Img",{
    opacity:0,
    scale:0.5,
    delay:0.5,
    duration:0.5,
    scrollTrigger : "#gsap3Img"
   })
  },[])
  return (
    <section className='padding-x w-full'>
      <div className='flex flex-col lg:flex-row items-center justify-center gap-16'>
        <div className='flex-1 items-start'>
          <h1 id='gsap3' className='text-4xl leading-tight font-bold'>We Provide You <span className='text-coral-red'>Super Quality</span> Shoes</h1>
          <p id='gsap3' className='text-xl text-slate-gray pt-5'>Ensuring premium comfort and style, our meticulously crafted footwear is designed to elevate your experience, providing you with unmatched quality, innovation, and a touch of elegance.</p>
          <p id='gsap3' className='text-xl text-slate-gray pt-5'>Our dedication to detail and excellence ensures your satisfaction</p>
          <div id='gsap3'>
          <Button
          label={"View Details"}
          />
          </div>
        </div>
        <div className='flex-1'>
           <img id='gsap3Img'
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
