import React from 'react';
import {
  EventsIcon,
  FlameImage,
  HomeIcon,
  RealtimeIcon,
  DevicesIcon,
  DomainIcon,
  SettingsIcon,
} from '../assets';
import { sideBarItemsData } from '../data';

const icons = {
  Home: HomeIcon,
  Realtime: RealtimeIcon,
  Events: EventsIcon,
  Devices: DevicesIcon,
  Domain: DomainIcon,
  Settings: SettingsIcon,
};

const SideBar = () => {
  return (
    <div className='fixed left-6 top-8 px-3 py-6 rounded-md bg-secondary'>
      <div className='flex justify-center'>
        <img src={FlameImage} alt='Flame' />
      </div>
      <div className='flex flex-col gap-8 justify-center items-center mt-8'>
        {sideBarItemsData.map(({ id, name, Icon }) => (
          <div className='flex flex-col items-center gap-3' key={id}>
            <img src={icons[name]} alt='Home Icon' className='w-fit' />
            <h2 className='text-light-white text-sm '>{name}</h2>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SideBar;
