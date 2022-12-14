import React from 'react'
import {ReactComponent as PlantIcon} from '../assets/littleleave.svg';

const Footer = () => {
  return (
    <div className="flex flex-col sm:flex-row items-center sm:justify-between px-6  xl:px-20 py-4 bg-[#182322]">
    <span className="flex items-center  gap-4 text-sm sm:text-center text-white/40"><span className="flex items-center"><PlantIcon className="h-6"/><strong className="text-[#558A76]">Little leaf</strong></span>© {new Date().getFullYear()}
    </span>
    <ul className="flex flex-wrap items-center mt-3 text-sm sm:mt-0 ">
        <li className="mr-4 md:mr-6 text-white/40">About us</li>
        <li className="mr-4 md:mr-6 text-white/40">Contact</li>
        <li className="mr-4 md:mr-6 text-white/40">FAQ</li>
        <li className="mr-4 md:mr-6 text-white/40">Privacy Policy</li>
    </ul>
    </div>
  )
}

export default Footer
