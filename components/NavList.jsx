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
      className='nav_list'
      variants={ulVariants}
    >
      <motion.li variants={liVariants}>
        <Link
          href='/'
          className={`block py-2 pl-3 pr-4 rounded md:p-0
            ${ pathname === '/' ? 
            'nav_list_active_item' 
            : 'nav_list_item'}`}
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
            'nav_list_active_item' 
            : 'nav_list_item'}`}
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
            'nav_list_active_item' 
            : 'nav_list_item'}`}
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