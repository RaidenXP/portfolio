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
            className={`proj_main_item
            ${ pathname === '/Projects' ? 'proj_item_active' : 
            'proj_item_not_active'}`}
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
            className={`proj_main_item
            ${ pathname === '/Projects/Portfolio' ? 'proj_item_active' : 
            'proj_item_not_active'}`}
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
            className={`proj_main_item
            ${ pathname === '/Projects/TrainingTracker' ? 'proj_item_active' : 
            'proj_item_not_active'}`}
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
            className={`proj_main_item
            ${ pathname === '/Projects/RayTracing' ? 'proj_item_active' : 
            'proj_item_not_active'}`}
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
            className={`proj_main_item
            ${ pathname === '/Projects/GameAI' ? 'proj_item_active' : 
            'proj_item_not_active'}`}
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
                  className={`proj_sub_item
                  ${ pathname === '/Projects/GameAI/Path' ? 
                  'proj_item_active' : 
                  'proj_item_not_active'}`}
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
                  className={`proj_sub_item
                  ${ pathname === '/Projects/GameAI/Hanabi' ? 
                  'proj_item_active' : 
                  'proj_item_not_active'}`}
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
                  className={`proj_sub_item
                  ${ pathname === '/Projects/GameAI/PCG' ? 
                  'proj_item_active' : 
                  'proj_item_not_active'}`}
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
            className={`proj_main_item
            ${ pathname === '/Projects/DataMining' ? 'proj_item_active' : 
            'proj_item_not_active'}`}
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
                  className={`proj_sub_item
                  ${ pathname === '/Projects/DataMining/DataExtraction' ? 
                  'proj_item_active' : 
                  'proj_item_not_active'}`}
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
                  className={`proj_sub_item
                  ${ pathname === '/Projects/DataMining/DataVisualization' ? 
                  'proj_item_active' : 
                  'proj_item_not_active'}`}
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
                  className={`proj_sub_item
                  ${ pathname === '/Projects/DataMining/Clustering' ? 
                  'proj_item_active' : 
                  'proj_item_not_active'}`}
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
                  className={`proj_sub_item
                  ${ pathname === '/Projects/DataMining/Other' ? 
                  'proj_item_active' : 
                  'proj_item_not_active'}`}
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
            className={`proj_main_item
            ${ pathname === '/Projects/SpotColWebApp' ? 'proj_item_active' : 
            'proj_item_not_active'}`}
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
            className={`proj_main_item
            ${ pathname === '/Projects/SousChef' ? 'proj_item_active' : 
            'proj_item_not_active'}`}
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