import React from 'react';
import SavedPlants from '../components/SavedPlants';

const Account = () => {
  return (

    <div className="account-container">
      <div className='w-full text-white'>
        <img
          className='w-full account-image object-cover'
          src='https://images.unsplash.com/photo-1633949971137-c6402fa083fe?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80'
          alt='/'
        />
        <div className='bg-black/60 fixed left-0 w-full account-image-overlay'></div>
        <div className='absolute top-[20%] p-4 md:p-8'>
          <h1 className='text-3xl md:text-5xl font-bold'>Your plants</h1>
        </div>
      </div>
    </div>
  );
};

export default Account;
