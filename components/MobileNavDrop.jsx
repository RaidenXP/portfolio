'use client';

import { useState } from 'react';

import NavList from './NavList';

const MobileNavDrop = () => {
  const [toggleHam, setToggleHam] = useState(false);

  return (
    <div className='relative md:hidden '>
      <button
        type='button' 
        className='inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 
        rounded-lg hover:bg-violet-100 focus:outline-none focus:ring-2 focus:ring-gray-200'
        onClick={() => setToggleHam((prev) => !prev)}
      >
        <span className='sr-only'>Open main menu</span>
        <svg
          className='w-5 h-5'
          xmlns='http://www.w3.org/2000/svg'
          fill='none'
          viewBox='0 0 17 14'
        >
          <path 
            stroke='currentColor' 
            strokeLinecap='round' 
            strokeLinejoin='round' 
            strokeWidth='2' 
            d='M1 1h15M1 7h15M1 13h15'
          />
        </svg>
      </button>
      <div 
        className={`absolute items-center w-[200px] justify-between -translate-x-[78%]
        ${toggleHam ? 'transition-all ease-in-out duration-[500ms] opacity-100 translate-y-0' : 
        'transition-all ease-in-out duration-[500ms] opacity-0 -translate-y-[10%] pointer-events-none'}`}
      >
        <NavList setHam={setToggleHam} hamState={toggleHam}/>
      </div>
    </div>
  )
}

export default MobileNavDrop