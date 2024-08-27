import React from 'react';
import { AlarmIcon, AlertIcon, GreenArrowTopIcon } from '../../assets';
import { totalLiveEventsData } from '../../data';

const icons = {
  Alert: AlertIcon,
  Alarm: AlarmIcon,
};

const TotalLive = () => {
  return (
    <div>
      <div className='flex gap-2 items-center'>
        <h3 className='text-white text-lg'>Live Events</h3>
        <div className='p-2 bg-[#37393D]'>
          <img
            src={GreenArrowTopIcon}
            alt={'Green Arrow Top'}
            width={12}
            height={12}
          />
        </div>
      </div>
      <div className='mt-10 flex flex-col gap-8'>
        {totalLiveEventsData.map(({ id, name, amount, percentage, icon }) => (
          <div key={id}>
            {icon && <img src={icons[icon]} alt={name} />}
            <p className='text-xs text-light-white mt-2'>{name}</p>
            <div className='flex gap-8 mt-2'>
              <h3 className='text-2xl text-white'>{amount}</h3>
              <div className='text-2xl flex gap-1 items-center bg-[#37393D] py-1 px-2 rounded-md'>
                <img
                  src={GreenArrowTopIcon}
                  alt={'Green Arrow Top'}
                  width={12}
                  height={12}
                />
                <span className='text-xs text-green'>{percentage}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TotalLive;
