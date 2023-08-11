'use client';

import { useState } from 'react';
import ProjectList from './ProjectList';

const SideBar = () => {
  const [toggleMenu, setToggleMenu] = useState(false);
  
  return (
    <>
      {/** Movbile view here*/}
      <div 
        className="sticky top-[64px] z-10 md:hidden py-3 px-4 border-b border-gray-200 backdrop-blur-sm
        backdrop-saturate-200 bg-violet-100/80 bg-violet-100"
      >
        <div
          className="flex flex-col justify-between"
        >
          <button 
            className="flex items-center gap-1" type="button"
            onClick={() => setToggleMenu((prev) => !prev)}
          >
            <span>Menu</span>
          </button>
          <div
            className={`${toggleMenu ? 'w-full h-screen block' : 'hidden'}`}
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
                className="h-[calc(100vh-200px)] flex flex-col pr-2 pb-4"
              >
                <div className="absolute top-0 left-0 h-3 bg-gradient-to-b from-inherit w-full z-10
                pointer-events-none"></div>
                <div className="absolute bottom-0 left-0 h-3 bg-gradient-to-t from-inherit w-full z-10
                pointer-events-none"></div>
                {/**LIST OF PROJECTS HERE*/}
                <ProjectList/>
              </nav>
            </div>
          </div>
        </div>
      </div>

      {/** Desktop view here */}
      <div 
        className="hidden md:flex w-[284px] md:shrink-0 sticky top-[121px] h-[calc(100vh-121px)]
        md:flex-col md:justify-between"
      >
        <div className='pb-[1px] block'>
          <div className='flex items-center p-2 h-[60px]'>
            <h2 className='text-xl font-extrabold items-center'>
              Project Box
            </h2>
          </div>
        </div>
        <div
          className='overflow-hidden relative'
        >
          <nav
            className='h-[calc(100vh-200px)] overflow-y-scroll flex flex-col pr-2 pb-4'
          >
            <div className="absolute top-0 left-0 h-3 bg-gradient-to-b from-inherit w-full z-10
            pointer-events-none"></div>
            <div className="absolute bottom-0 left-0 h-3 bg-gradient-to-t from-inherit w-full z-10
            pointer-events-none"></div>
            {/**LIST OF PROJECTS HERE*/}
            <ProjectList/>
          </nav>
        </div>
      </div>
    </>
    
  )
}

export default SideBar