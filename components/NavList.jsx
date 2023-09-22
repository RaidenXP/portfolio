'use client';

import Link from 'next/link';

import { usePathname } from 'next/navigation';

import { motion } from 'framer-motion';

const ulVariants = {
  open: {
    transition: { staggerChildren: 0.1, delayChildren: 0.25 }
  },
  closed: {
    transition: { staggerChildren: 0.05, staggerDirection: -1 }
  }
};

const liVariants = {
  open: {
    y: 0,
    opacity: 1,
    transition: {
      y: { stiffness: 1000, velocity: -100 }
    }
  },
  closed: {
    y: '-15%',
    opacity: 0,
    transition: {
      y: { stiffness: 1000 }
    }
  }
};

const NavList = ({ setHam, hamState }) => {
  const pathname = usePathname();

  return (
    <motion.ul 
      className='font-medium flex flex-col p-4 md:p-0 mt-4 border 
      border-violet-100 rounded-lg bg-violet-100 md:flex-row 
      md:space-x-8 md:mt-0 md:border-0 shadow-xl md:bg-transparent md:shadow-none'
      variants={ulVariants}
    >
      <motion.li variants={liVariants}>
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
      </motion.li>
      <motion.li variants={liVariants}>
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
      </motion.li>
      <motion.li variants={liVariants}>
        <Link
          href='/About'
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
      </motion.li>
    </motion.ul>
  )
}

export default NavList