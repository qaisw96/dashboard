import React from 'react';

const Header = () => {
  return (
    <div className='flex justify-between'>
      <div className='flex gap-4 mr-4 mt-5'>
        <div className='flex gap-2 items-center'>
          <div className='w-3 h-3 bg-yellow rounded-sm left-36' />
          <h3 className='text-sm text-light-white'>Alerts</h3>
        </div>
        <div className='flex gap-2 items-center'>
          <div className='w-3 h-3 bg-white rounded-sm left-36' />
          <h3 className='text-sm text-light-white'>Info</h3>
        </div>
        <div className='flex gap-2 items-center'>
          <div className='w-3 h-3 bg-red rounded-sm left-36' />
          <h3 className='text-sm text-light-white'>Alarm</h3>
        </div>
      </div>
      <h3 className='text-light-white text-sm'>
        Last updated time 2:23 pm, Sunday
      </h3>
    </div>
  );
};

export default Header;
