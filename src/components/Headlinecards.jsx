import React from 'react'

const Headlinecards = () => {
  return (
    <div className='max-w-[1640px] mx-auto px-6 py-12 grid md:grid-cols-3 gap-6'>
    {/* Card */}
    <div className='rounded-2xl relative'>
      {/* Overlay */}
      <div className='absolute w-full h-full bg-black/75 rounded-2xl text-[#F4F7F7] hover:bg-black/0 group'>
        <p className='group-hover:text-transparent text-2xl px-2 pt-4'>Delicious! This is <span className="font-bold  text-[#558A76] group-hover:text-transparent">Monstera Deliciosa</span></p>
        <button className='text-[#F4F7F7] mx-2 absolute bottom-4 font-bold text-xs bg-[#182322]'>Buy now</button>
      </div>
      <img
      className='max-h-[260px] md:max-h-[240px] w-full object-cover rounded-2xl'
        src='https://images.unsplash.com/photo-1557865353-72c46b1f864f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=695&q=80'
        alt='/'
      />
    </div>
    {/* Card */}
    <div className='rounded-2xl relative'>
      {/* Overlay */}
      <div className='group absolute w-full h-full bg-black/75 hover:bg-black/0 rounded-2xl text-[#F4F7F7]'>
        <p className='text-2xl px-2 pt-4 group-hover:text-transparent'>On the spot! Meet <span className="font-bold text-[#558A76] group-hover:text-transparent">Begonia Maculata</span></p>
        <button className='text-[#F4F7F7] mx-2 absolute bottom-4 font-bold text-xs bg-[#182322]'>New in</button>
      </div>
      <img
      className='max-h-[260px] md:max-h-[240px] w-full object-cover rounded-2xl'
      src='https://images.unsplash.com/photo-1501127122-f385ca6ddd9d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1035&q=80'
        alt='/'
      />
    </div>
    {/* Card */}
    <div className='rounded-2xl relative'>
      {/* Overlay */}
      <div className='group absolute w-full h-full bg-black/75 hover:bg-black/0 rounded-2xl text-[#F4F7F7]'>
        <p className='group-hover:text-transparent text-2xl px-2 pt-4'>New in, our adorable <span className="font-bold text-[#558A76] group-hover:text-transparent">Alocasias</span></p>
        <button className='text-[#F4F7F7] mx-2 absolute bottom-4 font-bold text-xs bg-[#182322]'>Best price</button>
      </div>
      <img
      className='max-h-[260px] md:max-h-[240px] w-full object-cover rounded-2xl'
        src='https://images.unsplash.com/photo-1514454923228-7ef54f9251c9?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=688&q=80'
        alt='/'
      />
    </div>
  </div>
  )
}

export default Headlinecards
