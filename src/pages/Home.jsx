import React from 'react'
import ParticlesBg from '../components/ParticlesBg'

const Home = () => {
  return (
    <section className='w-full h-screen relative bg-black overflow-hidden' id='home'>
      <ParticlesBg />
      <div className=' absolute inset-0'>

        <div className=' absolute -top-32 -left-32 
        w-[70vw] sm:w-[50vw] md:w-[40vw] 
        h-[70vw] sm:h-[50vw] md:h-[40vw]  max-w-125 max-h-125 rounded-full 
        bg-linear-to-r from-[#302b63] via-[#037f41] to-[#1cd8d2]
        opacity-30 sm:opacity-20 md:opacity-10 
        blur-[100px] sm:blu-[130px] md:blur-[150px] 
        animate-pulse '></div>
        <div className=' absolute bottom-0 right-0
        w-[70vw] sm:w-[50vw] md:w-[40vw] 
        h-[70vw] sm:h-[50vw] md:h-[40vw]  max-w-125 max-h-125 rounded-full 
        bg-linear-to-r from-[#302b63] via-[#037f41] to-[#1cd8d2]
        opacity-30 sm:opacity-20 md:opacity-10 
        blur-[100px] sm:blu-[130px] md:blur-[150px] 
        animate-pulse  delay-500'></div>
        
      </div>

      <div className=' relative z-10 h-full w-full max-w-7xl 
      mx-auto px-4 grid grid-cols-1 lg:grid-cols-2 '>
        <div className='flex flex-col  justify-center h-full text-center lg:text-left relative'>
          <div className=' w-full lg:pr-24 mx-auto max-w-3xl '> 
hi
          </div>

        </div>

      </div>
    </section>
  )
}

export default Home