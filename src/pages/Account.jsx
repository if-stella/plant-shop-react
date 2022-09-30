import React from 'react';
import SavedPlants from '../components/SavedPlants';

const Account = () => {
  return (

    <div className="account-container">
      <div className='w-full text-white'>
        <img
          className='w-full h-[400px] object-cover'
          src='https://images.unsplash.com/photo-1602227038240-833cedf590e1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1742&q=80'
          alt='/'
        />
        <div className='bg-black/60 fixed left-0 w-full h-[400px] top-0'></div>
        <div className='absolute top-[20%] p-4 md:p-8'>
          <h1 className='text-4xl md:text-6xl serife'>Your plants</h1>
        </div>
      </div>
    </div>
  );
};

export default Account;
