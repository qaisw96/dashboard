import React from 'react';
import { InfoIcon } from '../../assets';
import { WhiteArrowDownIcon } from '../../assets';
import StackedColumnChart from '../charts/StackedColumnChart';

const Site = ({ site }) => {
  const { name, prevYear, average, totalEvents, chart } = site;

  return (
    <div className='shadow-lg p-6 w-full'>
      <div className='flex justify-between items-center'>
        <h2 className='text-md text-white'>{name}</h2>
        <img src={InfoIcon} alt='Info Icon' />
      </div>
      <div className='mt-4 flex gap-2 lg:gap-24'>
        <div className='flex flex-col gap-2'>
          <h3 className='text-sm text-light-white'>Total Events</h3>
          <h3 className='text-2xl text-white'>{totalEvents}</h3>
          <div className='flex items-center'>
            <h3 className='text-light-white text-xs'>
              Prev. Yr. <span className='text-white'>{prevYear.value}</span>
            </h3>
            <div className='flex gap-1 bg-[#37393D] p-1 ml-1'>
              <img src={WhiteArrowDownIcon} alt='White Arrow Icon' width={12} />
              <h3 className='text-light-white text-xs'>{prevYear.trend}</h3>
            </div>
          </div>

          <div className='flex'>
            <h3 className='text-light-white text-xs'>
              Grp. Avg <span className='text-white'>{average.value}</span>
            </h3>
            <div className='flex gap-1 bg-[#37393D] p-1 ml-1'>
              <img src={WhiteArrowDownIcon} alt='White Arrow Icon' width={12} />
              <h3 className='text-light-white text-xs'>{average.trend}</h3>
            </div>
          </div>
        </div>
        <div>
          <StackedColumnChart data={chart} />
        </div>
      </div>
    </div>
  );
};

export default Site;
