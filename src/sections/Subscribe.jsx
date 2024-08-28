import gsap from 'gsap';
import Button from '../components/Button'
import { ScrollTrigger } from 'gsap/all';
import { useGSAP } from '@gsap/react';
gsap.registerPlugin(ScrollTrigger)

const Subscribe = () => {
  useGSAP(()=> {
    gsap.from("#gsap9",{
      opacity:0,
      y:100,
      duration:1,
      stagger:0.5,
      scrollTrigger : "#gsap9"
    })
  },[])
  return (
    <section
      id='contact-us'
      className='max-container flex justify-between items-center max-lg:flex-col gap-10'
    >
      <h3 id='gsap9' className='text-4xl leading-[68px] lg:max-w-md font-bold'>
        Sign Up for
        <span className='text-coral-red'> Updates </span>& Newsletter
      </h3>
      <div id='gsap9' className='lg:max-w-[40%] w-full flex items-center max-sm:flex-col gap-5 p-2.5 sm:border sm:border-slate-gray rounded-full'>
        <input type='text' placeholder='subscribe@nike.com' className='input' />
        <div className='flex max-sm:justify-end items-center max-sm:w-full'>
          <Button label='Sign Up' fullWidth />
        </div>
      </div>
    </section>
  );
};

export default Subscribe;
