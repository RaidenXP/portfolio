'use client';

import { useState } from 'react';

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
              <span>Project List</span>
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
        <div
          className='overflow-hidden relative'
        >
          <nav
            className='h-[calc(100vh-200px)] flex flex-col pr-2 pb-4'
          >
            <div className="absolute top-0 left-0 h-3 bg-gradient-to-b from-inherit w-full z-10
            pointer-events-none"></div>
            <div className="absolute bottom-0 left-0 h-3 bg-gradient-to-t from-inherit w-full z-10
            pointer-events-none"></div>
            {/**LIST OF PROJECTS HERE*/}
            sidebar
          </nav>
        </div>
      </div>
    </>
    
  )
}

export default SideBar