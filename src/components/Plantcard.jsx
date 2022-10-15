import React, { useState } from 'react'
import { BsCartPlus, BsCartDash } from 'react-icons/bs';
import { UserAuth } from '../context/AuthContext';
import { db } from '../firebase';
import {data} from '../data/data.js'
import { arrayUnion, doc, updateDoc } from 'firebase/firestore';


const Plantcard = ( {item} ) => {

  const [like, setLike] = useState(false);
  const [saved, setSaved] = useState(false);
  const {user} = UserAuth();
  const plantID = doc(db, 'users', `${user?.email}`);

  const savePlant = async () => {
    if (user?.email) {
      setLike(!like);
      setSaved(true);
      await updateDoc(plantID, {
        savedPlants: arrayUnion({
          id: item.id,
          name: item.name,
          image: item.image,
          icon: item.icon,
        }),
      });
    } else {
      alert('Please log in to add a plant to your cart!');
    }
  };

  return (
    <div className=' bg-white/30 hover:bg-white/60  rounded shadow-l hover:scale-105 duration-300 relative group'>
      <img
        src={item.image}
        alt={item.name}
        className='w-full h-[200px] object-cover rounded-tl-[3px] rounded-tr-[3px]'
      />
      <div className="bg-gradient-to-t from-[#558A76] w-full h-[200px] absolute top-0 left-0 opacity-50"></div>
      <p className='bg-white/90 text-[#558A76] text-2xl pl-2 pr-3 py-2 rounded-tr-2xl rounded-br-2xl absolute top-12 left-0'>
        {item.icon}
      </p>
      <p>
        <span className='bg-[#F4F7F7] text-[#558A76] text-l pl-3 pr-4 py-2 rounded-tl-[2px] rounded-br-3xl absolute left-0 top-0'>
          {item.price}
        </span>
      </p>
      <div onClick={savePlant} className='hidden group-hover:flex absolute pl-4 pr-[1.1rem] py-2 top-[180px] right-0 hover:bg-[#101717] bg-[#558A76] border-[#558A76] hover:border-[#101717] text-[#D6E5E5] hover:text-[#F4F7F7] items-center rounded-tl-xl rounded-bl-xl z-[10]'>
        {like ? (<><BsCartDash size={24} /></>) : (<><BsCartPlus size={24} /></>)}
      </div>
      <div className='flex p-4 relative flex-col gap-1'>
      <p className='serife text-xl sm:text-2xl leading-6 text-[#558A76]'>{item.name}</p>
      <p className='text-[15px]'>{item.text}</p>
    </div>
  </div>
  )
}

export default Plantcard
