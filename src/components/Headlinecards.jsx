import React from 'react'

import plantLeft from '../assets/plant_left.png';
import plantCenter from '../assets/plant_center.png';
import plantRight from '../assets/plant_right.png';

const Headlinecards = () => {
  return (
    <div className='max-w-[1640px] mx-auto px-6 py-12 grid md:grid-cols-3 gap-6 bg-gradient-to-t from-[#558A76]'>
      <div className='rounded relative h-[120px] sm:h-[160px] bg-[#D6E5E5]'>
        <p className='text-[14px] sm:text-[16px] pr-4 pt-4 ml-[130px] sm:ml-[200px]'><span className="serife leading-3 text-[20px] sm:text-[24px] text-[#558A76] group-hover:text-transparent">Rattlesnake plant</span><br/>Its long leaves not only have a rippled shape, they’re also marked with a wild green pattern.</p>
        <img
        className='h-[200px] sm:h-[240px] md:h-[330px] absolute bottom-2'
          src={plantLeft}
          alt='Hand reaching in a plant from left'
        />
      </div>
      <div className='rounded relative h-[120px] sm:h-[160px] bg-[#D6E5E5]'>
        <p className='text-[14px] sm:text-[16px] pl-4 pt-4 mr-[110px] sm:mr-[180px]'><span className="serife leading-3 text-[20px] sm:text-[24px] text-[#558A76] group-hover:text-transparent">Fiddle-leaf fig</span><br/>Its huge, fiddle-shaped leaves and the fact it can grow really tall means it has maximum impact in any room.</p>
        <img
        className='h-[220px] sm:h-[300px] md:h-[400px] absolute bottom-0 right-2'
          src={plantCenter}
          alt='Hand reaching in a plant from the bottom'
        />
      </div>
      <div className='rounded relative h-[120px] sm:h-[160px] bg-[#D6E5E5]'>
        <p className='text-[14px] sm:text-[16px] pl-4 sm:px-4 pt-4 ml-[170px] sm:ml-0 sm:mr-[200px]'><span className="serife leading-3 text-[20px] sm:text-[24px] text-[#558A76] group-hover:text-transparent">Peacock plant</span><br/>Like the fancy bird's feathers, its leaves look like they’ve been painted with big strokes of green.</p>
        <img
        className='h-[180px] sm:h-[240px] -scale-x-100 sm:scale-x-100 md:h-[260px] absolute bottom-2 md:bottom-5 left-0 sm:left-auto sm:right-0'
          src={plantRight}
          alt='Hand reaching in a plant from right'
        />
      </div>

  </div>
  )
}

export default Headlinecards
