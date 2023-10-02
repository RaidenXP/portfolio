'use client';

import { useState } from "react";
import ProjectList from "./ProjectList";

import { GoTriangleRight } from 'react-icons/go';

import { motion } from 'framer-motion';

const MobileSideBar = () => {
  const [toggleMenu, setToggleMenu] = useState(false);

  return (
    <motion.div className={`mobile_side_bar_header`}
      initial={false}
      animate={toggleMenu ? "open" : "closed"}
    >
      <button 
          className="sticky top-[102px] z-40 px-4 flex items-center gap-1 w-full" 
          type="button"
          onClick={() => setToggleMenu((prev) => !prev)}
        >
          <GoTriangleRight className={`transition-transform ease-in-out duration-100
            ${toggleMenu ? 'rotate-90' : ''}
          `}/>
          <span>Menu</span>
      </button>
      <motion.div 
        className={`mobile_side_bar_content`}
        variants={{
          open: {
            clipPath: "inset(0% 0% 0% 0% round 10px)",
            opacity: 1,
            transition: {
              type: "spring",
              bounce: 0,
              duration: 0.7,
              delayChildren: 0.3,
              staggerChildren: 0.05
            }
          },
          closed: {
            clipPath: "inset(0% 0% 90% 0% round 10px)",
            opacity: [1, .25,  0],
            transition: {
              type: "spring",
              bounce: 0,
              duration: 0.7
            }
          }
        }}
        style={{ pointerEvents: toggleMenu ? "auto" : "none" }}
      >
        <div className="pb-[1px]">
          <div className='flex items-center p-2 w-full h-[60px]'>
            <h2 className='text-xl font-extrabold'>
              Project Box
            </h2>
          </div>
        </div>
        <div className="overflow-hidden relative">
          <nav
            className="h-[calc(100vh-200px)] overflow-y-scroll flex flex-col pr-2 pb-4"
          >
            {/**LIST OF PROJECTS HERE*/}
            <ProjectList setMenu={setToggleMenu} menuState={toggleMenu}/>
          </nav>
        </div>
      </motion.div>
    </motion.div>
  )
}

export default MobileSideBar