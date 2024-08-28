import React from 'react'
import Button from '../components/Button'
import { offer } from '../assets/images'
import { arrowRight } from '../assets/icons'
import { ScrollTrigger } from 'gsap/all'
import gsap from 'gsap'
import { useGSAP } from '@gsap/react'
gsap.registerPlugin(ScrollTrigger)


const SpecialOffer = () => {


  useGSAP(()=> {
    gsap.from("#gsap6",{
     opacity:0,
     y:100,
     duration:0.5,
     stagger:0.5,
     scrollTrigger: "#gsap6"
    })
    gsap.from("#SE",{
     opacity:0,
     scale:0.5,
     duration:0.5,
     delay:1,
     scrollTrigger: "#SE"
    })
   },[])


  return (
    <section className='padding-x w-full'>
      <div className='flex flex-col xl:flex-row-reverse items-center justify-center gap-16'>
        <div className='flex-1 items-start'>
          <h1 id='gsap6' className='text-4xl leading-tight font-bold'><span className='text-coral-red'>Special</span> Offer</h1>
          <p id='gsap6' className='text-xl text-slate-gray pt-5'>Embark on a shopping journey that redefines your experience with unbeatable deals. From premier selections to incredible savings, we offer unparalleled value that sets us apart.</p>
          <p id='gsap6' className='text-xl text-slate-gray pt-5'>Embark on a shopping journey that redefines your experience with unbeatable deals. From premier selections to incredible savings, we offer unparalleled value that sets us apart.</p>
          <div id='gsap6' className='flex gap-4'>
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
        <div id='SE' className='flex-1'>
           <img
            src={offer}
            alt="Shoe8"
            width={773}
            height={687}
            className='object-contain'
            />
        </div>
      </div>
    </section>
  )
}

export default SpecialOffer
