import React from 'react';
import { InfoIcon, TrendIcon } from '../assets';

import WorkersTrendChart from './charts/WorkersTrendChart';

const LiveWorkers = () => {
  return (
    <div className='bg-secondary rounded-md p-4'>
      <div className='flex justify-between'>
        <div>
          <div className='flex gap-1'>
            <h3 className='text-white text-lg'>Live Workers Trend per Zone</h3>
            <img src={TrendIcon} alt='Trend Icon' />
          </div>
          <p className='text-light-white text-sm mt-1'>
            People Activity Trend for the last 12 hours
          </p>
        </div>
        <div className='flex gap-2 h-fit'>
          <div className='flex gap-8 mr-4 mt-6'>
            <div className='flex gap-2 items-center'>
              <div className='w-3 h-3 bg-green rounded-sm left-36' />
              <h3 className='text-sm text-light-white'>Green Zone</h3>
            </div>
            <div className='flex gap-2 items-center'>
              <div className='w-3 h-3 bg-orange rounded-sm left-36' />
              <h3 className='text-sm text-light-white'>Amber Zone</h3>
            </div>
            <div className='flex gap-2 items-center'>
              <div className='w-3 h-3 bg-red rounded-sm left-36' />
              <h3 className='text-sm text-light-white'>Red Zone</h3>
            </div>
          </div>
          <img src={InfoIcon} alt='Info Icon' />
        </div>
      </div>
      <div className='mt-8'>
        <WorkersTrendChart />
        {/* <img src={LiveWorkerChart} alt='Live Workers Chart' /> */}
      </div>
    </div>
  );
};

export default LiveWorkers;
