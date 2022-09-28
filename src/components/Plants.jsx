import React, { useState } from 'react'
import {data} from '../data/data.js'
import { BsCartPlus, BsCartDash } from 'react-icons/bs';

const Plants = () => {

  const [plants, setPlants] = useState(data);

  const filterType = (category) => {
    setPlants(
      data.filter((item) => {
        return item.category === category;
      })
    );
  };

  const filterPrice = (price) => {
    setPlants(
      data.filter((item) => {
        return item.price === price;
      })
    );
  };
  return (
    <div className='max-w-[1640px] m-auto px-6 py-12 bg-[#558A76]'>
      <h3 className='text-3xl sm:text-4xl text-center text-[#D6E5E5]'>Our precious plants</h3>
      <div className='flex flex-col md:flex-row justify-between'>
        <div className="mt-1 md:mt-0">
          <p className='text-[1.1em] text-[#F4F7F7]'>Filter type</p>
          <div className='flex flex-wrap gap-2 mt-1'>
            <button
              onClick={() => setPlants(data)}
              className='hover:bg-[#101717] bg-white/10 border-[#D6E5E5] hover:border-[#101717] text-[#D6E5E5] hover:text-[#F4F7F7]'>All
            </button>
            <button
              onClick={() => filterType('sun')}
              className='hover:bg-[#101717] bg-white/10 border-[#D6E5E5] hover:border-[#101717] text-[#D6E5E5] hover:text-[#F4F7F7]'>Sun
            </button>
            <button
              onClick={() => filterType('shadow')}
              className='hover:bg-[#101717] bg-white/10 border-[#D6E5E5] hover:border-[#101717] text-[#D6E5E5] hover:text-[#F4F7F7]'>Shadow
            </button>
          </div>
        </div>
        <div className="mt-2 md:mt-0">
          <p className='text-[1.1em] text-left md:text-right text-[#F4F7F7]'>Filter Price</p>
          <div className='flex justfiy-between flex-wrap gap-2 mt-1'>
            <button
              onClick={() => filterPrice('$')}
              className=' hover:bg-[#101717] bg-white/10 border-[#D6E5E5] hover:border-[#101717] text-[#D6E5E5] hover:text-[#F4F7F7]'>$
            </button>
            <button
              onClick={() => filterPrice('$$')}
              className=' hover:bg-[#101717] bg-white/10 border-[#D6E5E5] hover:border-[#101717] text-[#D6E5E5] hover:text-[#F4F7F7]'>$$
            </button>
            <button
              onClick={() => filterPrice('$$$')}
              className=' hover:bg-[#101717] bg-white/10 border-[#D6E5E5] hover:border-[#101717] text-[#D6E5E5] hover:text-[#F4F7F7]'>$$$
            </button>
            <button
              onClick={() => filterPrice('$$$$')}
              className='hover:bg-[#101717] bg-white/10 border-[#D6E5E5] hover:border-[#101717] text-[#D6E5E5] hover:text-[#F4F7F7]'>$$$$
            </button>
          </div>
        </div>
      </div>
      <div className='grid grid-cols-2 lg:grid-cols-4 gap-6 pt-4'>
        {plants.map((item, index) => (
          <div
            key={index}
            className=' bg-[#D6E5E5] shadow-lg rounded rounded-tl-3xl rounded-br-[30px] hover:scale-105 duration-300 relative'
          >
            <img
              src={item.image}
              alt={item.name}
              className='w-full h-[200px] object-cover rounded-tr rounded-tl-3xl rounded-bl-3xl rounded-br-3xl'
            />
            <p className='bg-[#F4F7F7] text-[#558A76] text-2xl pl-2 pr-3 py-2 rounded-tr-3xl rounded-br-3xl absolute top-12 left-0'>
              {item.icon}
            </p>
            <p>
              <span className='bg-[#F4F7F7] text-[#558A76] text-l px-3 py-2 rounded-tl-3xl rounded-br-3xl absolute left-0 top-0'>
                {item.price}
              </span>
              </p>
            <div className='flex justify-between align-center p-4 relative '>
              <p className='serife text-l sm:text-xl text-[#558A76]'>{item.name}</p>
              <div
              className='absolute pl-4 pr-[1.1rem] py-2 bottom-0 right-0 hover:bg-[#000] bg-[#101717] border-[#558A76] hover:border-[#101717] text-[#D6E5E5] hover:text-[#F4F7F7] flex items-center rounded-tl-3xl rounded-br-3xl'>
              <BsCartPlus size={24} />
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Plants
