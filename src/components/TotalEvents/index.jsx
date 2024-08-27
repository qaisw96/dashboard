import React from 'react';
import Header from './Header';
import TotalLive from './TotalLive';
import LiveEventsChart from '../charts/LiveEventsChart';
import Site from './Site';
import { sitesData } from '../../data';

const TotalEvents = () => {
  return (
    <div className='bg-secondary rounded-md p-4'>
      <Header />
      <div className='flex gap-8 flex-col lg:flex-row'>
        <div className='mt-12 flex flex-col md:flex-row gap-24 flex-1 shadow-2xl p-4'>
          <TotalLive />
          <LiveEventsChart />
        </div>
        <div className='mt-12 grid grid-cols-1 md:grid-cols-2 gap-4 flex-1'>
          {sitesData.map((site) => (
            <Site site={site} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default TotalEvents;
