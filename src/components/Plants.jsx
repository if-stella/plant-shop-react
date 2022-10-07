import React, { useState } from 'react'
import {data} from '../data/data.js'
import { BsCartPlus, BsCartDash } from 'react-icons/bs';
import { UserAuth } from '../context/AuthContext';
import { db } from '../firebase';
import { arrayUnion, doc, updateDoc } from 'firebase/firestore';

const Plants = ({item}) => {

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

  const [plants, setPlants] = useState(data);

  const filterType = (category) => {
    setPlants(
      data.filter((item) => {
        return item.category === category;
      })
    );
  };

  const filterPrice = (price) => {
    setPlants(
      data.filter((item) => {
        return item.price === price;
      })
    );
  };
  return (
    <div className='m-auto px-6 xl:px-20 py-10 bg-[#D6E5E5] relative z-[6]'>
      <h3 className='text-[2.25em] md:text-[3.5em] text-center text-[#558A76] serife'>Our precious plants</h3>
      <div className='flex flex-col md:flex-row justify-between'>
        <div className="mt-1 md:mt-0">
          <p className='text-[1.1em] text-[#182322]'>Filter type</p>
          <div className='flex flex-wrap gap-2 mt-1'>
            <button
              onClick={() => setPlants(data)}
              className='hover:bg-[#101717] bg-white/75 border-[#D6E5E5] hover:border-[#101717] text-[#558A76] hover:text-[#F4F7F7]'>All
            </button>
            <button
              onClick={() => filterType('sun')}
              className='hover:bg-[#101717] bg-white/75 border-[#D6E5E5] hover:border-[#101717] text-[#558A76] hover:text-[#F4F7F7]'>Sun
            </button>
            <button
              onClick={() => filterType('shadow')}
              className='hover:bg-[#101717] bg-white/75 border-[#D6E5E5] hover:border-[#101717] text-[#558A76] hover:text-[#F4F7F7]'>Shadow
            </button>
          </div>
        </div>
        <div className="mt-2 md:mt-0">
          <p className='text-[1.1em] text-left md:text-right text-[#182322]'>Filter Price</p>
          <div className='flex justfiy-between flex-wrap gap-2 mt-1'>
            <button
              onClick={() => filterPrice('$')}
              className=' hover:bg-[#101717] bg-white/75 border-[#D6E5E5] hover:border-[#101717] text-[#558A76] hover:text-[#F4F7F7]'>$
            </button>
            <button
              onClick={() => filterPrice('$$')}
              className=' hover:bg-[#101717] bg-white/75 border-[#D6E5E5] hover:border-[#101717] text-[#558A76] hover:text-[#F4F7F7]'>$$
            </button>
            <button
              onClick={() => filterPrice('$$$')}
              className=' hover:bg-[#101717] bg-white/75 border-[#D6E5E5] hover:border-[#101717] text-[#558A76] hover:text-[#F4F7F7]'>$$$
            </button>
            <button
              onClick={() => filterPrice('$$$$')}
              className='hover:bg-[#101717] bg-white/75 border-[#D6E5E5] hover:border-[#101717] text-[#558A76] hover:text-[#F4F7F7]'>$$$$
            </button>
          </div>
        </div>
      </div>
      <div className='grid grid-cols-2 lg:grid-cols-4 gap-6 pt-4'>
        {plants.map((item, index) => (
          <div
            key={index}
            className=' bg-[#D6E5E5] shadow-xl rounded rounded-tl-3xl rounded-br-[30px] hover:scale-105 duration-300 relative'
          >
            <img
              src={item.image}
              alt={item.name}
              className='w-full h-[200px] object-cover rounded-tr rounded-tl-3xl rounded-bl-3xl rounded-br-3xl'
            />
            <p className='bg-white/90 text-[#558A76] text-2xl pl-2 pr-3 py-2 rounded-tr-2xl rounded-br-2xl absolute top-12 left-0'>
              {item.icon}
            </p>
            <p>
              <span className='bg-[#F4F7F7] text-[#558A76] text-l px-3 py-2 rounded-tl-[22px] rounded-br-3xl absolute left-0 top-0'>
                {item.price}
              </span>
              </p>
            <div className='flex justify-between align-center p-4 relative '>
              <p className='serife text-l sm:text-xl text-[#558A76]'>{item.name}</p>
              <div onClick={savePlant}
              className='absolute pl-4 pr-[1.1rem] py-2 bottom-0 right-0 hover:bg-[#101717] bg-[#558A76] border-[#558A76] hover:border-[#101717] text-[#D6E5E5] hover:text-[#F4F7F7] flex items-center rounded-tl-3xl rounded-br-3xl'>
              {like ? (
              <>
              <BsCartDash size={24} />
              </>
               ) : (
              <>
              <BsCartPlus size={24} />
              </>
               )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Plants
