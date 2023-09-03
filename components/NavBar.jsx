'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useState } from 'react';
import { usePathname } from 'next/navigation';

const NavBar = () => {
  const [toggleHam, setToggleHam] = useState(false);
  const pathname = usePathname();

  return (
    <nav 
      className={`sticky top-0 w-full z-50 backdrop-blur-[4px] bg-gradient-to-br from-inherit`}
    >
      <div className='max-w-[1400px] flex flex-wrap md:flex-nowrap md:h-[70px]
      items-center justify-between mx-auto p-4'>
        <Link 
          href='/'
          className='flex items-center'
        >
          <Image
            src={'/n/n-100.png'}
            alt='N'
            width={70}
            height={70}
          />
        </Link>
        <button
          type='button' 
          className='inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 
          rounded-lg md:hidden hover:bg-violet-100 focus:outline-none focus:ring-2 focus:ring-gray-200'
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
          className={`items-center justify-between w-full md:flex md:w-auto ${toggleHam ? '' : 'hidden'}`}
        >
          <ul 
            className='font-medium flex flex-col p-4 md:p-0 mt-4 border 
            border-violet-100 rounded-lg bg-violet-100 md:flex-row 
            md:space-x-8 md:mt-0 md:border-0 shadow-xl md:bg-transparent md:shadow-none'
          >
            <li>
              <Link
                href='/'
                className={`block py-2 pl-3 pr-4 rounded md:p-0
                  ${ pathname === '/' ? 
                  'text-white bg-violet-700 md:bg-transparent md:text-violet-700' 
                  : 'text-gray-900 hover:bg-violet-300 hover:text-white md:hover:bg-transparent md:border-0' 
                  + ' md:hover:text-violet-700'}`}
                onClick={() => setToggleHam(false)}
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                href='/Projects'
                className={`block py-2 pl-3 pr-4 rounded md:p-0
                  ${ pathname.includes('/Projects') ? 
                  'text-white bg-violet-700 md:bg-transparent md:text-violet-700' 
                  : 'text-gray-900 hover:bg-violet-300 hover:text-white md:hover:bg-transparent md:border-0' 
                  + ' md:hover:text-violet-700'}`}
                onClick={() => setToggleHam(false)}
              >
                Projects
              </Link>
            </li>
            <li>
              <Link
                href='/WIP'
                className={`block py-2 pl-3 pr-4 rounded md:p-0
                  ${ pathname === '/About' ? 
                  'text-white bg-violet-700 md:bg-transparent md:text-violet-700' 
                  : 'text-gray-900 hover:bg-violet-300 hover:text-white md:hover:bg-transparent md:border-0' 
                  + ' md:hover:text-violet-700'}`}
                onClick={() => setToggleHam(false)}
              >
                About
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  )
}

export default NavBar