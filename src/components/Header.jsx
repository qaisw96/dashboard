import React, { useState } from 'react';
import { SearchIcon, BellIcon, MenuIcon, AvatarImage } from '../assets';

const Header = () => {
  const [search, setSearch] = useState('');

  const handleSearch = (e) => {
    setSearch(e.target.value);
  };

  return (
    <header className=''>
      <div className='flex items-center gap-5 justify-end'>
        <form className='relative hidden md:block'>
          <input
            className='bg-secondary text-white h-10 w-72 rounded-md pl-10'
            placeholder='Search...'
            value={search}
            onChange={handleSearch}
          />
          <img
            src={SearchIcon}
            alt='Search Icon'
            className='absolute top-2 left-2'
          />
        </form>
        <div>
          <img
            src={BellIcon}
            alt='Bell Icon'
            className='px-3 py-2 bg-secondary rounded-md'
          />
        </div>
        <div className='flex px-3 py-2 bg-secondary rounded-md gap-2 text-light-white'>
          <span>Modules</span>
          <img src={MenuIcon} alt='Menu Icon' className=' rounded-md' />
        </div>

        <img
          src={AvatarImage}
          width={46}
          alt='Avatar'
          className=' rounded-md'
        />
      </div>
      <h1 className='text-white text-2xl'>Realtime Dashboard</h1>
    </header>
  );
};

export default Header;
