import React from 'react'
import { headerLogo } from '../assets/images'
import { navLinks } from '../constants'
import { hamburger } from '../assets/icons'


const Navbar = () => {
  return (
    <header className='w-full max-containar absolute z-11'>
        <nav className='flex justify-between py-4 padding-x'>
            <a href="/"><img src={headerLogo} alt="Logo" width={100}/></a>
            <div>
                <ul className='flex gap-4 flex-row max-md:hidden'>
                    {navLinks.map((item)=>(
                        <div key={item.href}>
                            <a href={item.href}>{item.label}</a>
                        </div>
                    ))}
                </ul>
            </div>
            <a className='text-blue-500 underline font-semibold max-md:hidden' href="#">see more</a>
            <img className='max-md:block hidden' src={hamburger} alt="Hamburger" width={20} height={20}/>
        </nav>
    </header>
  )
}

export default Navbar
