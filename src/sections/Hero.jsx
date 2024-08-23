import React from 'react'
import Navbar from '../components/Navbar'
import { arrowRight } from '../assets/icons'
import Button from '../components/Button'

const Hero = () => {
  return (
    <section className='max-w-7xl'>
        <Navbar />
        <div className='w-full min-h-screen'>
            <div className='flex flex-col padding-x justify-center pt-[150px]'>
                <p className='text-sm text-slate-700'>Our Summer Collections</p>
                <h1 className='text-8xl max-md:text-4xl font-bold pt-10'>The New Arrivel <br/><span className='text-coral-red'>Nike</span> Shoes</h1>
                <p className='pt-10 text-slate-600 '>Discover stylish Nike Arrivels,quality<br/>comfort, and innovation for your active life</p>
            </div>
            <Button/>
        </div>
    </section>
  )
}

export default Hero
