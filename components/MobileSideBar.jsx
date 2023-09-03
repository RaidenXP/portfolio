'use client';

import { useState } from "react";
import ProjectList from "./ProjectList";

import { GoTriangleRight } from 'react-icons/go'

const MobileSideBar = () => {
  const [toggleMenu, setToggleMenu] = useState(false);

  return (
    <div className={`md:hidden sticky top-[102px] z-40 py-3 bg-gradient-to-br from-inherit 
      backdrop-blur-[4px] border-y`}>
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
      <div 
        className={`absolute px-4 flex flex-col justify-between w-full bg-gradient-to-br 
        from-slate-50 to-violet-100
        ${toggleMenu ? 
          'transition-all ease-in-out duration-[500ms] opacity-100 translate-y-0'
        : 'transition-all ease-in-out duration-[500ms] opacity-0 -translate-y-[3%] pointer-events-none'}
        `}
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
      </div>
    </div>
  )
}

export default MobileSideBar