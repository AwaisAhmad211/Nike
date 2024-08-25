import { useState } from 'react'
import Hero from './sections/Hero'
import Navbar from './components/Navbar'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Navbar/>
    <section className='xl:padding-y xl:padding-x'>
     <Hero/>
    </section>
    </>
  )
}

export default App
