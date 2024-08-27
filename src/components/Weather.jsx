import React from 'react';
import { CloudImage as CloudIcon } from '../assets';
import { weatherData } from '../data';

const Weather = () => {
  return (
    <div className='bg-secondary rounded-md p-4 flex justify-between items-center flex-1'>
      <div>
        <div className='flex items-center gap-4'>
          <img width={88} height={88} src={CloudIcon} alt='Cloud Icon' />
          <h2 className='text-light-white text-3xl'>
            {weatherData.temperature}
          </h2>
        </div>
        <h3 className='text-light-white text-2xl'>Amman, Jordan</h3>
      </div>
      <div className='flex justify-between gap-4'>
        {weatherData.times.map(({ id, time, temperature }) => (
          <div className='flex flex-col items-center'>
            <h3 className='text-light-white text-xl'>{time}</h3>
            <img width={57} height={57} src={CloudIcon} alt='Cloud Icon' />
            <h4 className='text-white text-lg'>{temperature}</h4>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Weather;
