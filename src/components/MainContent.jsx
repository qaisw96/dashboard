import React from 'react';
import DevicesStatus from './DevicesStatus';
import LiveEvents from './LiveEvents';
import LiveWorkers from './LiveWorkers';
import PeopleZone from './PeopleZone';
import Vacancies from './Vacancies';
import Weather from './Weather';
import TotalEvents from './TotalEvents';
import Header from './Header';

const MainContent = () => {
  return (
    <div className='md:grid grid-cols-34 gap-4 overflow-hidden md:pl-28'>
      <div className='h-24 bg-red-300 col-span-full md:col-span-34 lg:col-span-34 mt-3 md:mt-0'>
        <Header />
      </div>
      <div className='col-span-full md:col-span-17 lg:col-span-13 mt-3 md:mt-0'>
        <Vacancies />
      </div>
      <div className='col-span-full md:col-span-17 lg:col-span-12 mt-3 md:mt-0'>
        <LiveEvents />
      </div>
      <div className='flex flex-col gap-4 col-span-full md:col-span-17 lg:col-span-9 mt-3 md:mt-0'>
        <DevicesStatus />
        <Weather />
      </div>
      <div className='bg-red-300 col-span-full md:col-span-17 lg:col-span-25 mt-3 md:mt-0'>
        <LiveWorkers />
      </div>
      <div className='bg-red-300 col-span-full md:col-span-34 lg:col-span-9 mt-3 md:mt-0'>
        <PeopleZone />
      </div>
      <div className='bg-red-300 col-span-full md:col-span-34 lg:col-span-34 mt-3 md:mt-0'>
        <TotalEvents />
      </div>
    </div>
  );
};

export default MainContent;
