import React, { useState, useEffect } from 'react';
import { MdChevronLeft, MdChevronRight } from 'react-icons/md';
import { UserAuth } from '../context/AuthContext';
import { db } from '../firebase';
import { updateDoc, doc, onSnapshot } from 'firebase/firestore';
import { ImCross } from 'react-icons/im';


const SavedPlants = () => {
  const [plants, setPlants] = useState([]);
  const { user } = UserAuth();

  const slideLeft = () => {
    var slider = document.getElementById('slider');
    slider.scrollLeft = slider.scrollLeft - 500;
  };
  const slideRight = () => {
    var slider = document.getElementById('slider');
    slider.scrollLeft = slider.scrollLeft + 500;
  };

  useEffect(() => {
    onSnapshot(doc(db, 'users', `${user?.email}`), (doc) => {
      setPlants(doc.data()?.savedPlants);
    });
  }, [user?.email]);

  const movieRef = doc(db, 'users', `${user?.email}`)
  const deleteShow = async (passedID) => {
      try {
        const result = plants.filter((item) => item.id !== passedID)
        await updateDoc(movieRef, {
            savedPlants: result
        })
      } catch (error) {
          console.log(error)
      }
  }

  return (
    <>
      <h2 className='text-white font-bold md:text-xl px-4 mt-4 mb-2'>Your Plants</h2>
      <div className='relative flex items-center group'>
      <MdChevronLeft
      onClick={slideLeft}
      className="bg-white rounded-full absolute opacity-50 hover:opacity-100 cursor-pointer left-2 sm:left-4 new-row-icon z-[14] h-7 w-7 sm:h-10 sm:w-10"/>
        <div
          id={'slider'}
          className='w-full h-full overflow-x-scroll whitespace-nowrap scroll-smooth scrollbar-hide relative'
        >
          {plants.map((item) => (
            <div
              key={item.id}
              className='w-[160px] sm:w-[200px] md:w-[240px] lg:w-[280px] inline-block cursor-pointer relative pl-2'
            >
              <img
                className='w-full h-auto block'
                src={`https://image.tmdb.org/t/p/w500/${item?.img}`}
                alt={item?.title}
              />
              <div className='absolute top-0 left-0 w-full h-full hover:bg-black/80 opacity-0 hover:opacity-100 text-white'>
                <p className='white-space-normal text-[10px] md:text-sm lg:text-lg font-bold flex justify-center items-center h-full text-center'>
                  {item?.title}
                </p>
                <p onClick={()=> deleteShow(item.id)} className='absolute text-gray-300 hover:text-red-600 top-2 left-3 sm:top-4 sm:left-5'><ImCross className="w-3 h-3 sm:w-5 sm:h-5"/></p>
              </div>
            </div>
          ))}
        </div>
        <MdChevronRight
        onClick={slideRight}
        className="bg-white rounded-full absolute opacity-50 hover:opacity-100 cursor-pointer z-[14] right-2 sm:right-4 new-row-icon h-7 w-7 sm:h-10 sm:w-10"/>
      </div>
    </>
  );
};

export default SavedPlants;
