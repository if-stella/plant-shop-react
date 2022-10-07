import React from 'react';
import { categories } from '../data/data.js';

const Categories = () => {
  console.log(categories);
  return (
    <div className='m-auto px-6 xl:px-20 py-12 bg-gradient-to-b from-[#D6E5E5] to-[#0e1717]'>
      <h2 className='text-[2.25em] md:text-[3.5em] text-center text-[#558A76] serife'>Get inspired...</h2>
      <div className='grid grid-cols-2 md:grid-cols-3 gap-5 md:gap-10 py-3'>
        {categories.map((item, index) => (
          <div key={index} className='rounded-full relative max-w-[220px] max-h-[220px] sm:max-w-[300px] sm:max-h-[300px] md:max-w-[250px] md:max-h-[250px] lg:max-w-[350px] lg:max-h-[350px] xl:max-w-[400px] xl:max-h-[400px]'>
            <div className='absolute group w-full h-full bg-[#202E2D]/80 hover:bg-black/0 rounded-full text-[#F4F7F7] flex flex-col justify-center shadow-xl'>
              <h3 className='group-hover:text-transparent text-center serife text-2xl sm:text-4xl'>{item.name}</h3>
            </div>
            <img src={item.image} alt={item.name} className='h-full w-full object-cover rounded-full' />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Categories;
