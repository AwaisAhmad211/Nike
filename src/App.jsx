import { useState } from 'react'
import Hero from './sections/Hero'
import Navbar from './components/Navbar'
import PopularProducts from './sections/PopularProducts'
import SuperQuality from './sections/SuperQuality'
import Services from './sections/Services'
import SpecialOffer from './sections/SpecialOffer'
import CustomerReviews from './sections/CustomerReviews'
import Subscribe from './sections/Subscribe'

function App() {
  const [count, setCount] = useState(0)

  return (
    <main className='relative'>
    <Navbar/>
    <section className='xl:padding-y xl:padding-x'>
     <Hero/>
    </section>
    <section>
      <PopularProducts />
    </section>
    <section>
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
    <section className='padding-x sm:py-32 py-16 w-full'>
      <Subscribe />
    </section>
    </main>
  )
}

export default App
