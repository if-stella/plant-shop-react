import React, { useState, useEffect } from 'react';
import { UserAuth } from '../context/AuthContext';
import { db } from '../firebase';
import { updateDoc, doc, onSnapshot } from 'firebase/firestore';
import { BsCartPlus, BsCartDash } from 'react-icons/bs';
import { AiOutlineClose } from 'react-icons/ai';



const SavedPlants = () => {
  const [like, setLike] = useState(false);
  const [plants, setPlants] = useState([]);
  const { user } = UserAuth();
  useEffect(() => {
    onSnapshot(doc(db, 'users', `${user?.email}`), (doc) => {
      setPlants(doc.data()?.savedFavorites);
    });
  }, [user?.email]);

  const favoriteRef = doc(db, 'users', `${user?.email}`)
  const deleteFavorite = async (passedID) => {
    setLike(like);
      try {
        const result = plants.filter((item) => item.id !== passedID)
        await updateDoc(favoriteRef, {
            savedFavorites: result
        })
      } catch (error) {
          console.log(error)
      }
  }

  return (
    <div>
      All your plants will go here, but so far Stella hasn't figured out yet how to display them.
      <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 pt-4'>
        {plants.map((item) => (
            <div className=' bg-white/30 hover:bg-white/60  rounded hover:shadow-xl hover:scale-105 duration-300 relative group'>
            <img
              src={item?.image}
              alt={item?.name}
              className='w-full h-[200px] object-cover rounded-tl-[3px] rounded-tr-[3px]'
            />
            <div className="bg-gradient-to-t from-[#558A76] w-full h-[200px] absolute top-0 left-0 opacity-50"></div>
            <p className='bg-white/90 text-[#558A76] text-2xl pl-2 pr-3 py-2 rounded-tr-2xl rounded-br-2xl absolute top-12 left-0'>
              {item?.icon}
            </p>
            <p>
              <span className='bg-[#F4F7F7] text-[#558A76] text-l pl-3 pr-4 py-2 rounded-tl-[2px] rounded-br-3xl absolute left-0 top-0'>
                {item?.price}
              </span>
            </p>
            <div onClick={deleteFavorite} className='absolute pl-4 pr-[1.1rem] py-2 top-[180px] right-0 text-[#D6E5E5] hover:text-[#F4F7F7] items-center rounded-tl-xl rounded-bl-xl z-[10]'>
              <AiOutlineClose size={24} />
            </div>
            <div className='flex p-4 relative flex-col gap-1'>
            <div className='absolute text-2xl sm:text-3xl text-[#BAD3D3] text-right -rotate-90 -left-[76px] top-[105px] w-[200px] h-[32px]'><p className="serife">{item.name}</p></div>
            <div className="ml-8">
              <em className='text-[1.1em] sm:text-xl leading-6 text-[#558A76]'>{item?.latin}</em>
            <p className='text-[15px]'>{item?.text}</p>
            </div>

          </div>
        </div>
        ))}
      </div>
    </div>
  )
}

export default SavedPlants
