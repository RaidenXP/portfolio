'use client';

import Link from "next/link"

import { usePathname } from 'next/navigation';

import { motion } from "framer-motion";

const itemVariants = {
  open: {
    opacity: 1,
    y: 0,
    transition: { type: "spring", stiffness: 300, damping: 24 }
  },
  closed: { opacity: 0, y: 20, transition: { duration: 0.2 } }
};

const ProjectList = ({ setMenu, menuState }) => {
  const pathname = usePathname();

  return (
    <>
      <motion.ul variants={itemVariants} className="block ms-0 me-0 m-0 p-0 list-none">
        <li className="my-1.5 ml-[3px]">
          <Link
            href='/Projects'
            className={`flex w-full relative cursor-pointer items-center justify-between rounded-md pl-2
            py-1 text-left text-sm font-medium
            ${ pathname === '/Projects' ? 'text-violet-700 hover:text-black' : 'hover:text-violet-700'}`}
            onClick={() => {
              if(setMenu)
                setMenu(false)
            }}
          >
            Welcome!
          </Link>
        </li>
      </motion.ul>
      <motion.ul variants={itemVariants} className="block ms-0 me-0 m-0 p-0">
        <li className="my-1.5 ml-[3px]">
          <Link
            href='/Projects/Portfolio'
            className={`flex w-full relative cursor-pointer items-center justify-between rounded-md pl-2
            py-1 text-left text-sm font-medium
            ${ pathname === '/Projects/Portfolio' ? 'text-violet-700 hover:text-black' : 
            'hover:text-violet-700'}`}
            onClick={() => {
              if(setMenu)
                setMenu(false)
            }}
          >
            This Portfolio!
          </Link>
          <div className="h-auto opacity-[1] overflow-hidden flex flex-col">
            <div className="relative">
              <div className="absolute bottom-0 left-0 h-[6px] bg-gradient-to-t from-inherit w-full z-10 pointer-events-none"></div>
            </div>
          </div>
        </li>
      </motion.ul>
      <motion.ul variants={itemVariants} className="block ms-0 me-0 m-0 p-0">
        <li className="my-1.5 ml-[3px]">
          <Link
            href='/Projects/TrainingTracker'
            className={`flex w-full relative cursor-pointer items-center justify-between rounded-md pl-2
            py-1 text-left text-sm font-medium
            ${ pathname === '/Projects/TrainingTracker' ? 'text-violet-700 hover:text-black' : 
            'hover:text-violet-700'}`}
            onClick={() => {
              if(setMenu)
                setMenu(false)
            }}
          >
            Training Tracker
          </Link>
          <div className="h-auto opacity-[1] overflow-hidden flex flex-col">
            <div className="relative">
              <div className="absolute bottom-0 left-0 h-[6px] bg-gradient-to-t from-inherit w-full z-10 pointer-events-none"></div>
            </div>
          </div>
        </li>
      </motion.ul>
      <motion.ul variants={itemVariants} className="block ms-0 me-0 m-0 p-0">
        <li className="my-1.5 ml-[3px]">
          <Link
            href='/Projects/RayTracing'
            className={`flex w-full relative cursor-pointer items-center justify-between rounded-md pl-2
            py-1 text-left text-sm font-medium
            ${ pathname === '/Projects/RayTracing' ? 'text-violet-700 hover:text-black' : 
            'hover:text-violet-700'}`}
            onClick={() => {
              if(setMenu)
                setMenu(false)
            }}
          >
            Raytracer
          </Link>
          <div className="h-auto opacity-[1] overflow-hidden flex flex-col">
            <div className="relative">
              <div className="absolute bottom-0 left-0 h-[6px] bg-gradient-to-t from-inherit w-full z-10 pointer-events-none"></div>
            </div>
          </div>
        </li>
      </motion.ul>
      <motion.ul variants={itemVariants} className="block ms-0 me-0 m-0 p-0">
        <li className="my-1.5 ml-[3px]">
          <Link
            href='/Projects/GameAI'
            className={`flex w-full relative cursor-pointer items-center justify-between rounded-md pl-2
            py-1 text-left text-sm font-medium
            ${ pathname === '/Projects/GameAI' ? 'text-violet-700 hover:text-black' : 
            'hover:text-violet-700'}`}
            onClick={() => {
              if(setMenu)
                setMenu(false)
            }}
          >
            Game AI Series
          </Link>
          <div className="h-auto opacity-[1] overflow-hidden flex flex-col">
            <div className="relative">
              <ul className="mb-0 px-2 ">
                <li className="my-1.5">
                  <Link href='/Projects/GameAI/Path' 
                  className={`flex w-full relative cursor-pointer 
                  items-center justify-between rounded-md pl-2 py-1 text-left
                  text-sm hover:text-black text-gray-900
                  ${ pathname === '/Projects/GameAI/Path' ? 
                  'text-violet-700 hover:text-black' : 
                  'hover:text-violet-700'}`}
                  onClick={() => {
                    if(setMenu)
                      setMenu(false)
                  }}
                  >
                    Path Finding
                  </Link>
                </li>
                <li className="my-1.5">
                  <Link href='/Projects/GameAI/Hanabi' 
                  className={`flex w-full relative cursor-pointer 
                  items-center justify-between rounded-md pl-2 py-1 text-left
                  text-sm hover:text-black text-gray-900
                  ${ pathname === '/Projects/GameAI/Hanabi' ? 
                  'text-violet-700 hover:text-black' : 
                  'hover:text-violet-700'}`}
                  onClick={() => {
                    if(setMenu)
                      setMenu(false)
                  }}
                  >
                    Hanabi Gameplay
                  </Link>
                </li>
                <li className="my-1.5">
                  <Link href='/Projects/GameAI/PCG' 
                  className={`flex w-full relative cursor-pointer 
                  items-center justify-between rounded-md pl-2 py-1 text-left
                  text-sm hover:text-black text-gray-900
                  ${ pathname === '/Projects/GameAI/PCG' ? 
                  'text-violet-700 hover:text-black' : 
                  'hover:text-violet-700'}`}
                  onClick={() => {
                    if(setMenu)
                      setMenu(false)
                  }}
                  >
                    PCG: Mazes
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </li>
      </motion.ul>
      <motion.ul variants={itemVariants} className="block ms-0 me-0 m-0 p-0">
        <li className="my-1.5 ml-[3px]">
          <Link
            href='/Projects/DataMining'
            className={`flex w-full relative cursor-pointer items-center justify-between rounded-md pl-2
            py-1 text-left text-sm font-medium
            ${ pathname === '/Projects/DataMining' ? 'text-violet-700 hover:text-black' : 
            'hover:text-violet-700'}`}
            onClick={() => {
              if(setMenu)
                setMenu(false)
            }}
          >
            Data Mining Series
          </Link>
          <div className="h-auto opacity-[1] overflow-hidden flex flex-col">
            <div className="relative">
              <ul className="mb-0 px-2 ">
                <li className="my-1.5">
                  <Link href='/Projects/DataMining/DataExtraction' 
                  className={`flex w-full relative cursor-pointer 
                  items-center justify-between rounded-md pl-2 py-1 text-left
                  text-sm hover:text-black text-gray-900
                  ${ pathname === '/Projects/DataMining/DataExtraction' ? 
                  'text-violet-700 hover:text-black' : 
                  'hover:text-violet-700'}`}
                  onClick={() => {
                    if(setMenu)
                      setMenu(false)
                  }}
                  >
                    Data Extraction
                  </Link>
                </li>
                <li className="my-1.5">
                  <Link href='/Projects/DataMining/DataVisualization' 
                  className={`flex w-full relative cursor-pointer 
                  items-center justify-between rounded-md pl-2 py-1 text-left
                  text-sm hover:text-black text-gray-900
                  ${ pathname === '/Projects/DataMining/DataVisualization' ? 
                  'text-violet-700 hover:text-black' : 
                  'hover:text-violet-700'}`}
                  onClick={() => {
                    if(setMenu)
                      setMenu(false)
                  }}
                  >
                    Data Visualization
                  </Link>
                </li>
                <li className="my-1.5">
                  <Link href='/Projects/DataMining/Clustering' 
                  className={`flex w-full relative cursor-pointer 
                  items-center justify-between rounded-md pl-2 py-1 text-left
                  text-sm hover:text-black text-gray-900
                  ${ pathname === '/Projects/DataMining/Clustering' ? 
                  'text-violet-700 hover:text-black' : 
                  'hover:text-violet-700'}`}
                  onClick={() => {
                    if(setMenu)
                      setMenu(false)
                  }}
                  >
                    Clustering
                  </Link>
                </li>
                <li className="my-1.5">
                  <Link href='/Projects/DataMining/Other' 
                  className={`flex w-full relative cursor-pointer 
                  items-center justify-between rounded-md pl-2 py-1 text-left
                  text-sm hover:text-black text-gray-900
                  ${ pathname === '/Projects/DataMining/Other' ? 
                  'text-violet-700 hover:text-black' : 
                  'hover:text-violet-700'}`}
                  onClick={() => {
                    if(setMenu)
                      setMenu(false)
                  }}
                  >
                    Other
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </li>
      </motion.ul>
      <motion.ul variants={itemVariants} className="block ms-0 me-0 m-0 p-0">
        <li className="my-1.5 ml-[3px]">
          <Link
            href='/Projects/SpotColWebApp'
            className={`flex w-full relative cursor-pointer items-center justify-between rounded-md pl-2
            py-1 text-left text-sm font-medium
            ${ pathname === '/Projects/SpotColWebApp' ? 'text-violet-700 hover:text-black' : 
            'hover:text-violet-700'}`}
            onClick={() => {
              if(setMenu)
                setMenu(false)
            }}
          >
            Spotify Collaboration Web App
          </Link>
          <div className="h-auto opacity-[1] overflow-hidden flex flex-col">
            <div className="relative">
              <div className="absolute bottom-0 left-0 h-[6px] bg-gradient-to-t from-inherit w-full z-10 pointer-events-none"></div>
            </div>
          </div>
        </li>
      </motion.ul>
      <motion.ul variants={itemVariants} className="block ms-0 me-0 m-0 p-0">
        <li className="my-1.5 ml-[3px]">
          <Link
            href='/Projects/SousChef'
            className={`flex w-full relative cursor-pointer items-center justify-between rounded-md pl-2
            py-1 text-left text-sm font-medium
            ${ pathname === '/Projects/SousChef' ? 'text-violet-700 hover:text-black' : 
            'hover:text-violet-700'}`}
            onClick={() => {
              if(setMenu)
                setMenu(false)
            }}
          >
            Sous Chef Mobile App
          </Link>
          <div className="h-auto opacity-[1] overflow-hidden flex flex-col">
            <div className="relative">
              <div className="absolute bottom-0 left-0 h-[6px] bg-gradient-to-t from-inherit w-full z-10 pointer-events-none"></div>
            </div>
          </div>
        </li>
      </motion.ul>
    </>
  )
}

export default ProjectList