import React from 'react';
import { InfoIcon, TrendIcon, DeviceIcon } from '../assets';
import { devicesStatusData } from '../data';

const DevicesStatus = () => {
  return (
    <div className='bg-secondary rounded-md p-4 flex-1'>
      <div className='flex justify-between items-start'>
        <div className='flex gap-3'>
          <h3 className='text-lg text-white'>Devices Status Distribution</h3>
          <img src={TrendIcon} alt='Trend Icon' />
        </div>
        <img src={InfoIcon} alt='Info Icon' />
      </div>
      <div className='mt-6 flex justify-between items-center gap-4 lg:gap-12'>
        <img src={DeviceIcon} alt='Device Icon' />
        <div className='flex justify-between gap-4 lg:gap-12'>
          {devicesStatusData.map(({ id, amount, name, color }) => (
            <div className='flex flex-col justify-center items-center gap-1'>
              <div
                className={`w-3 h-3 top-7  rounded-full left-36`}
                style={{ background: color }}
              />
              <h3 className='text-2xl text-white'>{amount}</h3>
              <p className='text-xs text-light-white'>{name}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default DevicesStatus;
