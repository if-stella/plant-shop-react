import React, {useState} from 'react';
import { AiOutlineMenu, AiOutlineSearch, AiOutlineTags } from 'react-icons/ai';
import { BsFillCartFill } from 'react-icons/bs';
import {TbTruckDelivery} from 'react-icons/tb';
import { MdOutlineContactSupport} from 'react-icons/md';
import {BiWallet, BiHeart} from 'react-icons/bi';
import {GrFormClose} from 'react-icons/gr';

import {ReactComponent as PlantIcon} from '../assets/littleleave.svg';

const Navbar = () => {
const [nav, setNav] = useState(false)

  return (
    <div className='max-w-[1640px] mx-auto flex justify-between items-center p-4 fixed z-[5] w-full navbar'>
      {/* Left side */}
      <div className='flex items-center'>
        <div onClick={()=> setNav(!nav)} className='cursor-pointer'>
          <AiOutlineMenu size={25} className="text-[#BAD3D3]"/>
        </div>
        <div className="flex items-center gap-2 px-4">
        <PlantIcon className="h-8"/>
        <h1 className='sm:text-1xl lg:text-2xl text-[#558A76]'>Little leaf</h1>
        </div>

      </div>

      {/* Search Input */}
      <div className='bg-[#BAD3D3] rounded-full flex items-center px-2 w-[200px] sm:w-[400px] lg:w-[500px]'>
        <AiOutlineSearch size={25} className="text-[#558A76]" />
        <input
          className='bg-transparent p-2 w-full focus:outline-none'
          type='text'
          placeholder='Search for plants...'
        />
      </div>
      {/* Cart button */}
      <button className='bg-[#558A76] border-[#558A76] text-[#F4F7F7] hidden md:flex items-center py-2 rounded-full'>
        <BsFillCartFill size={20} className='mr-2' /> Cart
      </button>

      {/* Mobile Menu */}
      {/* Overlay */}
      {nav ? <div className='bg-black/80 fixed w-full h-screen z-10 top-0 left-0'></div> : ''}


      {/* Side drawer menu */}
      <div className={nav ? 'fixed top-0 left-0 w-[300px] h-screen bg-white z-10 duration-300' : 'fixed top-0 left-[-100%] w-[300px] h-screen bg-white z-10 duration-300' }>
        <GrFormClose
            onClick={()=> setNav(!nav)}
          size={25}
          className='absolute right-4 top-4 cursor-pointer'
        />
        <div className="flex items-center gap-2 p-4">
        <PlantIcon className="h-6"/>
        <h2 className="text-[#558A76]">Little leaf</h2>
        </div>
        <nav>
            <ul className='flex flex-col p-4'>
                <li className='text-xl pb-4 flex'><TbTruckDelivery size={25} className='mr-4 text-[#558A76]' /> Orders</li>
                <li className='text-xl py-4 flex'><BiHeart size={25} className='mr-4 text-[#558A76]' /> Favorites</li>
                <li className='text-xl py-4 flex'><BiWallet size={25} className='mr-4 text-[#558A76]' /> Wallet</li>
                <li className='text-xl py-4 flex'><MdOutlineContactSupport size={25} className='mr-4 text-[#558A76]' /> Help</li>
                <li className='text-xl pt-4 flex'><AiOutlineTags size={25} className='mr-4 text-[#558A76]' /> Promotions</li>
            </ul>
        </nav>
      </div>
    </div>
  );
};

export default Navbar;
