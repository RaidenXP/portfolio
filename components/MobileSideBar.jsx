'use client';

import { useState } from "react";
import ProjectList from "./ProjectList";

const MobileSideBar = () => {
  const [toggleMenu, setToggleMenu] = useState(false);

  return (
    <div 
      className="sticky top-[98px] z-10 md:hidden py-3 px-4 border-b backdrop-blur-sm
      backdrop-saturate-200"
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
              className="h-[calc(100vh-200px)] overflow-y-scroll flex flex-col pr-2 pb-4"
            >
              {/**LIST OF PROJECTS HERE*/}
              <ProjectList setMenu={setToggleMenu} menuState={toggleMenu}/>
            </nav>
          </div>
        </div>
      </div>
    </div>
  )
}

export default MobileSideBar