import React from 'react';
import {
  InfoIcon,
  TrendIcon,
  GreenArrowTopIcon,
  BlueEllipseImage,
  OrangeEllipseImage,
  RedEllipseImage,
} from '../assets';
import AreaChart from './charts/AreaChart';
import { liveEventsData } from '../data';

const icons = {
  BlueEllipse: BlueEllipseImage,
  OrangeEllipse: OrangeEllipseImage,
  RedEllipse: RedEllipseImage,
};

const LiveEvents = () => {
  return (
    <div className='bg-secondary rounded-md h-full'>
      <div className='flex justify-between items-start p-3'>
        <div className=''>
          <div className='flex gap-3'>
            <h3 className='text-lg text-white'>Live events</h3>
            <img src={TrendIcon} alt='Trend Icon' />
          </div>
          <p className='text-light-white text-sm mt-1'>
            Current statistics for the events{' '}
          </p>
        </div>
        <img src={InfoIcon} alt='Info Icon' />
      </div>
      <div className='flex justify-between gap-10 mt-3 px-3'>
        {liveEventsData.map(({ name, icon, percentage, amount }) => (
          <div className='flex flex-col'>
            <img src={icons[icon]} alt={name} width={67} height={67} />
            <div className='flex items-center gap-2'>
              <span className='text-2xl text-white'>{amount}</span>
              <div className='text-2xl flex gap-1 bg-[#37393D] py-1 px-2 rounded-md'>
                <img
                  src={GreenArrowTopIcon}
                  alt={'Green Arrow Top'}
                  className='w-full'
                />
                <span className='text-xs text-green'>{percentage}</span>
              </div>
            </div>
            <p className='text-xs text-light-white mt-1'>{name}</p>
          </div>
        ))}
      </div>
      <div className='relative'>
        <AreaChart />
      </div>
    </div>
  );
};

export default LiveEvents;
