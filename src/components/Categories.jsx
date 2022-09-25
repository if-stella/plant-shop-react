import React from 'react';
import { categories } from '../data/data.js';

const Categories = () => {
  console.log(categories);
  return (
    <div className='max-w-[1640px] m-auto px-6 py-12 bg-gradient-to-b from-[#558A76]'>
      <h1 className='font-bold text-4xl text-center text-[#D6E5E5]'>Get inspired...</h1>
      <div className='grid grid-cols-2 md:grid-cols-4 gap-6 py-6'>
        {categories.map((item, index) => (
          <div key={index} className='rounded-lg relative'>
            <div className='absolute group w-full h-full bg-[#182322]/80 hover:bg-black/0 rounded rounded-tl-3xl text-[#F4F7F7] flex flex-col justify-center'>
              <h2 className='group-hover:text-transparent text-center serife text-2xl sm:text-4xl'>{item.name}</h2>
            </div>
            <img src={item.image} alt={item.name} className='max-h-[220px] md:max-h-[240px] w-full object-cover rounded rounded-tl-3xl rounded-br-3xl' />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Categories;
