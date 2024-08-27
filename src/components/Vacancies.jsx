import React from 'react';

const Vacancies = () => {
  return (
    <div className='bg-vacancies rounded-md bg-cover h-full text-white p-6 flex flex-col justify-between'>
      <div>
        <h3 className='text-4xl'>ABCD Site</h3>
        <p className='text-xl text-[#D9D9D9]'>RR1 Area</p>
      </div>
      <div className='flex '>
        <div className='flex flex-col gap-3 flex-1'>
          <h3 className='text-5xl'>1,148</h3>
          <p className='text-2xl text-[#D9D9D9]'>Active People</p>
        </div>
        <div className='flex flex-col gap-3 flex-1 ml-16'>
          <h3 className='text-5xl'>924</h3>
          <p className='text-2xl text-[#D9D9D9]'>Active Devices</p>
        </div>
      </div>
    </div>
  );
};

export default Vacancies;
