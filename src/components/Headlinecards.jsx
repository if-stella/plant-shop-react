import React from 'react'

import plantLeft from '../assets/plant_left.png';
import plantCenter from '../assets/plant_center.png';
import plantRight from '../assets/plant_right.png';

const Headlinecards = () => {
  return (
    <div className='mx-auto px-6 xl:px-20 py-6 md:py-16 grid md:grid-cols-3 gap-6 md:gap-3 lg:gap-6 bg-gradient-to-t from-[#D6E5E5]'>
      <div className='rounded relative h-[120px] md:h-[220px] lg:h-[160px] bg-[#F4F7F7] shadow-xl'>
        <p className='text-[14px] xl:text-[16px] pr-4 pt-4 ml-[130px] sm:ml-[160px] md:ml-[110px] lg:ml-[180px] xl:ml-[168px]'><span className="serife leading-3 text-[20px] lg:text-[24px]  text-[#558A76] group-hover:text-transparent">Rattlesnake plant</span><br/>Its long leaves not only have a rippled shape, they’re also marked with a wild green pattern.</p>
        <img
        className='h-[200px] md:h-[160px] lg:h-[280px] xl:h-[250px] absolute bottom-4 md:bottom-14 lg:bottom-4'
          src={plantLeft}
          alt='Hand reaching in a plant from left'
        />
      </div>
      <div className='rounded relative h-[120px] md:h-[220px] lg:h-[160px] bg-[#F4F7F7] shadow-xl mt-6 sm:mt-0'>
        <p className='text-[14px] xl:text-[16px] pl-4 pt-4 mr-[110px] sm:mr-[180px] md:mr-[95px] lg:mr-[145px]'><span className="serife leading-3 text-[20px] lg:text-[24px] text-[#558A76] group-hover:text-transparent">Fiddle-leaf fig</span><br/>Its huge, fiddle-shaped leaves and the fact it can grow really tall means it has maximum impact in any room.</p>
        <img
        className='h-[220px] md:h-[160px] lg:h-[320px] absolute bottom-0 right-2'
          src={plantCenter}
          alt='Hand reaching in a plant from the bottom'
        />
      </div>
      <div className='rounded relative h-[120px] md:h-[220px] lg:h-[160px] bg-[#F4F7F7] shadow-xl mt-6 sm:mt-0'>
        <p className='text-[14px] xl:text-[16px] pl-4 px-4 pt-4 ml-[170px] sm:ml-0 sm:mr-[200px] md:mr-[100px] lg:mr-[150px] xl:mr-[180px]'><span className="serife leading-3 text-[20px] lg:text-[24px] text-[#558A76] group-hover:text-transparent">Peacock plant</span><br/>Like the fancy bird's feathers, its leaves look like they’ve been painted with big strokes of green.</p>
        <img
        className='h-[180px] md:h-[120px] lg:h-[200px] xl:h-[250px] -scale-x-100 sm:scale-x-100 absolute bottom-2 md:bottom-14 lg:bottom-2 left-0 sm:left-auto sm:right-0'
          src={plantRight}
          alt='Hand reaching in a plant from right'
        />
      </div>

  </div>
  )
}

export default Headlinecards
