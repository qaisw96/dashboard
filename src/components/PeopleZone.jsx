import React from 'react';
import {
  InfoIcon,
  MohammedAvatarImage,
  OsamaAvatarImage,
  SaleemAvatarImage,
  SamiAvatarImage,
} from '../assets';
import { peopleData } from '../data';

const avatars = {
  Mohammed: MohammedAvatarImage,
  Saleem: SaleemAvatarImage,
  Sami: SamiAvatarImage,
  Osama: OsamaAvatarImage,
};

const PeopleZone = () => {
  return (
    <div className='bg-secondary rounded-md p-4 h-full'>
      <div>
        <div className='flex gap-1'>
          <h3 className='text-white text-lg'>
            People Hazardous Zone / Critical Mission
          </h3>
          <img src={InfoIcon} alt='Trend Icon' />
        </div>
        <p className='text-light-white text-sm mt-1'>
          Updated since last 5 minutes
        </p>
      </div>
      <div className='flex flex-col justify-between gap-12 mt-6 relative z-10'>
        <div className='absolute h-full w-[.8px] bg-[#7A7A7A] left-6 z-[-1]' />
        {peopleData.map(({ id, fullName, time, role, avatar }) => (
          <div key={id} className='flex gap-6'>
            <img src={avatars[avatar]} alt={fullName} />
            <div>
              <h3 className='text-md text-[#D9D9D9]'>{fullName}</h3>
              <p className='text-sm text-[#D9D9D9]'>{role}</p>
            </div>
            <div className=''>
              <p className='text-xs text-[#B2BAC9]'>{time}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PeopleZone;
