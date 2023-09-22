'use client';

import { useState } from 'react';

import NavList from './NavList';

import { motion } from 'framer-motion';

const Path = props => (
  <motion.path
    fill="transparent"
    strokeWidth="3"
    stroke="hsl(0, 0%, 18%)"
    strokeLinecap="round"
    {...props}
  />
);

const dropdown = {
  open: {
    y: 0,
    x: '-78%',
    opacity: 1,
    transition: {
      type: "spring",
      bounce: 0,
      duration: 0.7,
    }
  },
  closed: {
    y: '-10%',
    x: '-78%',
    opacity: 0,
    transition: {
      type: "spring",
      bounce: 0,
      duration: 0.7,
    }
  }
};

const MobileNavDrop = () => {
  const [toggleHam, setToggleHam] = useState(false);

  return (
    <motion.div 
      className='relative md:hidden'
      initial={false}
      animate={toggleHam ? "open" : "closed"}
    >
      <button
        type='button' 
        className='inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 
        rounded-lg hover:bg-violet-100 focus:outline-none focus:ring-2 focus:ring-gray-200'
        onClick={() => setToggleHam((prev) => !prev)}
      >
        <svg width="23" height="23" viewBox="0 0 23 23">
          <Path
            variants={{
              closed: { d: "M 2 2.5 L 20 2.5" },
              open: { d: "M 3 16.5 L 17 2.5" }
            }}
          />
          <Path
            d="M 2 9.423 L 20 9.423"
            variants={{
              closed: { opacity: 1 },
              open: { opacity: 0 }
            }}
            transition={{ duration: 0.1 }}
          />
          <Path
            variants={{
              closed: { d: "M 2 16.346 L 20 16.346" },
              open: { d: "M 3 2.5 L 17 16.346" }
            }}
          />
        </svg>
      </button>
      <motion.div 
        className={`absolute items-center w-[200px] justify-between`}
        variants={dropdown}
        style={{ pointerEvents: toggleHam ? "auto" : "none" }}
      >
        <NavList setHam={setToggleHam} hamState={toggleHam}/>
      </motion.div>
    </motion.div>
  )
}

export default MobileNavDrop