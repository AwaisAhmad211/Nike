import { useState } from 'react'
import Hero from './sections/Hero'
import Navbar from './components/Navbar'
import PopularProducts from './sections/PopularProducts'
import SuperQuality from './sections/SuperQuality'
import Services from './sections/Services'
import SpecialOffer from './sections/SpecialOffer'
import CustomerReviews from './sections/CustomerReviews'
import Subscribe from './sections/Subscribe'
import Footer from './sections/Footer'

function App() {
  const [count, setCount] = useState(0)

  return (
    <main className='relative'>
    <Navbar/>
    <section id='home' className='xl:padding-y xl:padding-x'>
     <Hero/>
    </section>
    <section id='products'>
      <PopularProducts />
    </section>
    <section id='about-us'>
      <SuperQuality />
    </section>
    <section>
      <Services/>
    </section>
    <section>
      <SpecialOffer />
    </section>
    <section>
      <CustomerReviews />
    </section>
    <section id='contact-us' className='padding-x sm:py-32 py-16 w-full'>
      <Subscribe />
    </section>
    <section className=' bg-black padding-x padding-t pb-8'>
      <Footer />
    </section>
    </main>
  )
}

export default App
