import React from 'react'
import { headerLogo } from '../assets/images'
import { navLinks } from '../constants'
import { hamburger } from '../assets/icons'
import { ScrollTrigger } from "gsap/all";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
gsap.registerPlugin(ScrollTrigger)


const Navbar = () => {
    useGSAP(()=> {
        gsap.from("#nav",{
            opacity:0,
            duration:1,
            delay:0.5,
            y:-100,
          })
          gsap.from("#nav2",{
            opacity:0,
            duration:1,
            delay:0.5,
            y:-100,
            stagger : 0.2
          })
        },[])
       
  return (
    <>
    <header className='w-full max-containar absolute z-11'>
        <nav id='nav' className='flex justify-between py-4 padding-x'>
            <a href="/"><img src={headerLogo} alt="Logo" width={100}/></a>
            <div>
                <ul className='flex gap-4 flex-row max-md:hidden cursor-pointer'>
                    {navLinks.map((item)=> (
                        <li id='nav2' key={item.label}>
                            <a href={item.href}>{item.label}</a>
                        </li>
                    ))}
                </ul>
            </div>
            <a className='text-blue-500 underline font-semibold max-md:hidden' href="#">see more</a>
            <img className='max-md:block hidden' src={hamburger} alt="Hamburger" width={20} height={20}
            />
        </nav>
    </header>
    </>
  )
}

export default Navbar
