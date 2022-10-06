import React from 'react'

const Revealcard = () => {
  return (
    <div className="flex flex-wrap">
      <div className="group relative h-[500px] sm:h-[1024px] w-full sm:w-1/2" id="reveal1"><div className="hidden group-hover:block text-white absolute bottom-6 right-8 text-right"><h1 className="serife text-[2.25em]">Monstera</h1><em>Monstera deliciosa variegata</em></div></div>
      <div className="group relative h-[500px] sm:h-[1024px] w-full sm:w-1/2" id="reveal2"><div className="hidden group-hover:block text-white absolute bottom-6 left-8 text-left"><h1 className="serife text-[2.25em]">Snake plant</h1><em>Dracaena trifasciata</em></div></div>
      <div className="group relative h-[500px] sm:h-[1024px] w-full sm:w-1/2" id="reveal3"><div className="hidden group-hover:block text-white absolute top-6 right-8 text-right"><h1 className="serife text-[2.25em]">Pinstripe plant</h1><em>Calathea ornata</em></div></div>
      <div className="group relative h-[500px] sm:h-[1024px] w-full sm:w-1/2" id="reveal4"><div className="hidden group-hover:block text-white absolute top-6 left-8 text-left"><h1 className="serife text-[2.25em]">Cigar plant</h1><em>Calathea lutea</em></div></div>
    </div>
  )
}

export default Revealcard
