import React from 'react'

const Hero = () => {
  return (
    <div className='mx-auto'>
        <div className='max-h-[500px] relative'>
            {/* Overlay */}
            <div className='absolute w-full h-full text-[#F4F7F7] max-h-[500px] bg-black/50 flex flex-col justify-center'>
                <h1 className='px-6 xl:px-20 text-6xl sm:text-7xl lg:text-8xl font-normal'>The <span className='text-[#558A76] serife text-[64px] sm:text-[74px] lg:text-[98px]'>nicest</span></h1>
                <h1 className='px-6 xl:px-20 text-6xl sm:text-7xl lg:text-8xl font-normal'> <span className='text-[#558A76] serife text-[64px] sm:text-[74px] lg:text-[98px]'>plants</span> around.</h1>
            </div>
            <img className='w-full max-h-[500px] h-[400px] sm:h-[500px] object-cover' src='https://images.unsplash.com/photo-1530049478161-0780526964f4?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80' alt="A nice plantshop" />
        </div>
    </div>
  )
}

export default Hero
