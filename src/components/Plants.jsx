import React, { useState } from 'react'
import {data} from '../data/data.js'

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
    <div className='max-w-[1640px] m-auto px-6 py-12 bg-[#101717]'>
      <h1 className='text-3xl sm:text-4xl text-center text-[#F4F7F7]'>Our precious plants</h1>
      <div className='flex flex-col md:flex-row justify-between'>
        <div className="mt-1 md:mt-0">
          <p className='text-[1.25em] text-[#F4F7F7]'>Filter type</p>
          <div className='flex flex-wrap gap-2'>
            <button
              onClick={() => setPlants(data)}
              className='hover:bg-[#558A76] border-[#558A76] text-[#F4F7F7] hover:text-[#F4F7F7]'>All
            </button>
            <button
              onClick={() => filterType('sun')}
              className='hover:bg-[#558A76] border-[#558A76] text-[#F4F7F7] hover:text-[#F4F7F7]'>Sun
            </button>
            <button
              onClick={() => filterType('shadow')}
              className='hover:bg-[#558A76] border-[#558A76] text-[#F4F7F7] hover:text-[#F4F7F7]'>Shadow
            </button>
          </div>
        </div>
        <div className="mt-2 md:mt-0">
          <p className='text-[1.25em] text-left md:text-right text-[#F4F7F7]'>Filter Price</p>
          <div className='flex justfiy-between flex-wrap gap-2'>
            <button
              onClick={() => filterPrice('$')}
              className=' hover:bg-[#558A76] border-[#558A76] text-[#F4F7F7] hover:text-[#F4F7F7]'>$
            </button>
            <button
              onClick={() => filterPrice('$$')}
              className=' hover:bg-[#558A76] border-[#558A76] text-[#F4F7F7] hover:text-[#F4F7F7]'>$$
            </button>
            <button
              onClick={() => filterPrice('$$$')}
              className=' hover:bg-[#558A76] border-[#558A76] text-[#F4F7F7] hover:text-[#F4F7F7]'>$$$
            </button>
            <button
              onClick={() => filterPrice('$$$$')}
              className='hover:bg-[#558A76] border-[#558A76] text-[#F4F7F7] hover:text-[#F4F7F7]'>$$$$
            </button>
            <button
              onClick={() => setPlants(data)}
              className=' hover:bg-[#558A76] border-[#558A76] text-[#F4F7F7] hover:text-[#F4F7F7]'>Reset
            </button>
          </div>
        </div>
      </div>
      <div className='grid grid-cols-2 lg:grid-cols-4 gap-6 pt-4'>
        {plants.map((item, index) => (
          <div
            key={index}
            className=' bg-[#F4F7F7] shadow-lg rounded-lg hover:scale-105 duration-300'
          >
            <img
              src={item.image}
              alt={item.name}
              className='w-full h-[200px] object-cover rounded-t-lg'
            />
            <div className='flex justify-between align-center p-4'>
              <p className='font-bold text-[0.9em]'>{item.name}</p>
              <p>
                <span className='bg-[#558A76] text-white p-1 rounded-full'>
                  {item.price}
                </span>
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Plants
