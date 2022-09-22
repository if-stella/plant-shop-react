import React from 'react'

const Headlinecards = () => {
  return (
    <div className='max-w-[1640px] mx-auto p-4 py-12 grid md:grid-cols-3 gap-6 bg-[#101717]'>
    {/* Card */}
    <div className='rounded relative'>
      {/* Overlay */}
      <div className='absolute w-full h-full bg-black/50 rounded text-white'>
        <p className='font-bold text-2xl px-2 pt-4'>Monsterous Monsteras</p>
        <p className='px-2'>Through 8/26</p>
        <button className='border-[#101717] text-[#F4F7F7] mx-2 absolute bottom-4 font-bold text-xs bg-[#182322]'>Buy now</button>
      </div>
      <img
      className='max-h-[160px] md:max-h-[200px] w-full object-cover rounded'
        src='https://images.unsplash.com/photo-1545241047-6083a3684587?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80'
        alt='/'
      />
    </div>
    {/* Card */}
    <div className='rounded relative'>
      {/* Overlay */}
      <div className='absolute w-full h-full bg-black/50 rounded text-white'>
        <p className='font-bold text-2xl px-2 pt-4'>On the spot! Meet Begonia Maculata.</p>
        <p className='px-2'>Spotless</p>
        <button className='border-[#101717] text-[#F4F7F7] mx-2 absolute bottom-4 font-bold text-xs bg-[#182322]'>New in</button>
      </div>
      <img
      className='max-h-[160px] md:max-h-[200px] w-full object-cover rounded'
      src='https://images.unsplash.com/photo-1600958004829-16421f144fd0?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80'
        alt='/'
      />
    </div>
    {/* Card */}
    <div className='rounded relative'>
      {/* Overlay */}
      <div className='absolute w-full h-full bg-black/50 rounded text-white'>
        <p className='font-bold text-2xl px-2 pt-4'>Our adorable Alocasias</p>
        <p className='px-2'>Tasty Treats</p>
        <button className='border-[#101717] text-[#F4F7F7] mx-2 absolute bottom-4 font-bold text-xs bg-[#182322]'>Buy now</button>
      </div>
      <img
      className='max-h-[160px] md:max-h-[200px] w-full object-cover rounded'
        src='https://images.unsplash.com/photo-1632320212567-5b1cbd478154?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=928&q=80'
        alt='/'
      />
    </div>
  </div>
  )
}

export default Headlinecards
