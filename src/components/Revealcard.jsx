import React from 'react'

const Revealcard = () => {
  return (
    <div className="flex flex-wrap">
      <div className="group relative h-[500px] sm:h-[700px] w-full sm:w-1/2" id="reveal1"><div className="hidden group-hover:block absolute bottom-4 right-4 text-right sm:bottom-9 sm:right-10"><h1 className="serife text-[2em] sm:text-[2.75em] text-[#F4F7F7] leading-8 sm:leading-10 mb-1">Monstera</h1><em className="text-[#D6E5E5]">Monstera deliciosa</em></div></div>
      <div className="group relative h-[500px] sm:h-[700px] w-full sm:w-1/2" id="reveal2"><div className="hidden group-hover:block absolute bottom-4 left-4 sm:bottom-9 sm:left-10 text-left"><h1 className="serife text-[2em] sm:text-[2.75em] text-[#F4F7F7] leading-8 sm:leading-10 mb-1">Snake plant</h1><em className="text-[#D6E5E5]">Dracaena trifasciata</em></div></div>
      <div className="order-4 sm:order-3 group relative h-[500px] sm:h-[700px] w-full sm:w-1/2" id="reveal3"><div className="hidden group-hover:block absolute bottom-4 left-4 sm:top-9 sm:right-10 text-left sm:text-right"><h1 className="serife text-[2em] sm:text-[2.75em] text-[#F4F7F7] leading-8 sm:leading-10 mb-1">Pinstripe plant</h1><em className="text-[#D6E5E5]">Goeppertia ornata</em></div></div>
      <div className="order-3 sm:order-4 group relative h-[500px] sm:h-[700px] w-full sm:w-1/2" id="reveal4"><div className="hidden group-hover:block absolute bottom-4 left-4 sm:top-9 sm:left-10 text-left"><h1 className="serife text-[2em] sm:text-[2.75em] text-[#F4F7F7] leading-8 sm:leading-10 mb-1">Cuban cigar plant</h1><em className="text-[#D6E5E5]">Calathea lutea</em></div></div>
    </div>
  )
}

export default Revealcard
