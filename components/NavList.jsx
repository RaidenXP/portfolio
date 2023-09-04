'use client';

import Link from 'next/link';

import { usePathname } from 'next/navigation';

const NavList = ({ setHam, hamState }) => {
  const pathname = usePathname();

  return (
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
          onClick={() => {
            if(setHam)
              setHam(false)
          }}
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
          onClick={() => {
            if(setHam)
              setHam(false)
          }}
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
          onClick={() => {
            if(setHam)
              setHam(false)
          }}
        >
          About
        </Link>
      </li>
    </ul>
  )
}

export default NavList