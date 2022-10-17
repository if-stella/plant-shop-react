import React, { useState } from 'react'
import Plantcard from "./Plantcard"
import {data} from '../data/data.js'


const Plants = ({item}) => {
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
    <div className='m-auto px-6 xl:px-20 py-10 relative z-[6] graingrey'>
      <h3 className='text-[2.25em] md:text-[3.5em] text-center text-[#558A76] serife'>Our precious plants</h3>
      <div className='flex flex-col md:flex-row justify-between'>
        <div className="mt-1 md:mt-0">
          <p className='text-[1.1em] text-[#182322]'>Filter type</p>
          <div className='flex flex-wrap gap-2 mt-1'>
            <button
              onClick={() => setPlants(data)}
              className='hover:bg-[#101717] bg-white/75 border-[#D6E5E5] hover:border-[#101717] text-[#558A76] hover:text-[#F4F7F7]'>All
            </button>
            <button
              onClick={() => filterType('sun')}
              className='hover:bg-[#101717] bg-white/75 border-[#D6E5E5] hover:border-[#101717] text-[#558A76] hover:text-[#F4F7F7]'>Sun
            </button>
            <button
              onClick={() => filterType('shadow')}
              className='hover:bg-[#101717] bg-white/75 border-[#D6E5E5] hover:border-[#101717] text-[#558A76] hover:text-[#F4F7F7]'>Shadow
            </button>
          </div>
        </div>
        <div className="mt-2 md:mt-0">
          <p className='text-[1.1em] text-left md:text-right text-[#182322]'>Filter Price</p>
          <div className='flex justfiy-between flex-wrap gap-2 mt-1'>
            <button
              onClick={() => filterPrice('$')}
              className=' hover:bg-[#101717] bg-white/75 border-[#D6E5E5] hover:border-[#101717] text-[#558A76] hover:text-[#F4F7F7]'>$
            </button>
            <button
              onClick={() => filterPrice('$$')}
              className=' hover:bg-[#101717] bg-white/75 border-[#D6E5E5] hover:border-[#101717] text-[#558A76] hover:text-[#F4F7F7]'>$$
            </button>
            <button
              onClick={() => filterPrice('$$$')}
              className=' hover:bg-[#101717] bg-white/75 border-[#D6E5E5] hover:border-[#101717] text-[#558A76] hover:text-[#F4F7F7]'>$$$
            </button>
            <button
              onClick={() => filterPrice('$$$$')}
              className='hover:bg-[#101717] bg-white/75 border-[#D6E5E5] hover:border-[#101717] text-[#558A76] hover:text-[#F4F7F7]'>$$$$
            </button>
          </div>
        </div>
      </div>
      <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 pt-4'>
        {plants.map((item, id) => (
          <Plantcard key={id} item={item} />
        ))}
      </div>
    </div>
  )
}

export default Plants
