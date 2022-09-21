import React, {useState} from 'react';
import { AiOutlineMenu, AiOutlineSearch, AiOutlineTags } from 'react-icons/ai';
import { BsFillCartFill } from 'react-icons/bs';
import {TbTruckDelivery} from 'react-icons/tb';
import { MdOutlineContactSupport} from 'react-icons/md';
import {RiPlantFill} from 'react-icons/ri';
import {BiWallet, BiHeart} from 'react-icons/bi';
import {GrFormClose} from 'react-icons/gr';

const Navbar = () => {
const [nav, setNav] = useState(false)

  return (
    <div className='max-w-[1640px] mx-auto flex justify-between items-center p-4'>
      {/* Left side */}
      <div className='flex items-center'>
        <div onClick={()=> setNav(!nav)} className='cursor-pointer'>
          <AiOutlineMenu size={25} />
        </div>
        <div className="flex items-center gap-2 px-4">
        <RiPlantFill size={25}/>
        <h1 className='text-1xl sm:text-2xl lg:text-3xl'>Best plants</h1>
        </div>
        <div className='hidden lg:flex items-center bg-gray-200 rounded-full p-1 text-[14px]'>
          <p className='bg-black text-white rounded-full px-2 py-1'>Delivery</p>
          <p className='px-2 py-1'>Pickup</p>
        </div>
      </div>

      {/* Search Input */}
      <div className='bg-gray-200 rounded-full flex items-center px-2 w-[200px] sm:w-[400px] lg:w-[500px]'>
        <AiOutlineSearch size={25} />
        <input
          className='bg-transparent p-2 w-full focus:outline-none'
          type='text'
          placeholder='Search for plants...'
        />
      </div>
      {/* Cart button */}
      <button className='bg-black text-white hidden md:flex items-center py-2 rounded-full'>
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
        <RiPlantFill size={20}/>
        <h2>Best plants</h2>
        </div>
        <nav>
            <ul className='flex flex-col p-4 text-gray-800'>
                <li className='text-xl pb-4 flex'><TbTruckDelivery size={25} className='mr-4' /> Orders</li>
                <li className='text-xl py-4 flex'><BiHeart size={25} className='mr-4' /> Favorites</li>
                <li className='text-xl py-4 flex'><BiWallet size={25} className='mr-4' /> Wallet</li>
                <li className='text-xl py-4 flex'><MdOutlineContactSupport size={25} className='mr-4' /> Help</li>
                <li className='text-xl pt-4 flex'><AiOutlineTags size={25} className='mr-4' /> Promotions</li>
            </ul>
        </nav>
      </div>
    </div>
  );
};

export default Navbar;
