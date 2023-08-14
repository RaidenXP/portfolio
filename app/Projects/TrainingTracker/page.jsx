import React from 'react'

const TrainingTrackerPage = () => {
  return (
    <>
      <article className='w-full min-w-0 max-w-6xl mt-4 px-1 md:px-6 
      min-h-[calc(100vh-103px)] block' 
      >
        <div className='max-w-none'>
          Training Tracker
        </div>
      </article>
      <nav
        className='w-56 shrink-0 order-last hidden lg:block'
      >
        <div className='sticky top-[126px] h-[calc(100vh-121px)]'>
          <div className='mb-1 mt-[7px] text-sm font-medium text-black'>
            On this page
          </div>
          <div className='relative'>
            <div className='absolute top-0 left-0 w-full h-3 bg-gradient-to-b from-inherit z-1'></div>
            <div className='absolute bottom-0 left-0 z-10 w-full h-3 bg-gradient-to-t from-inherit'></div>
            <ul className='space-y-2.5 py-2 text-sm overflow-y-auto max-h-[70vh]'>
              <li>
                <div className='block text-gray-600 hover:text-blue-400 leading-[1.6]'>
                  Test
                </div>
              </li>
              <li>
                <div className='block text-gray-600 hover:text-blue-400 leading-[1.6]'>
                  Test
                </div>
              </li>
            </ul>
          </div>
          <div className='pt-5 mt-3 space-y-2 text-sm text-gray-900 border-t border-gray-200'></div>
        </div>
      </nav>
    </>
  )
}

export default TrainingTrackerPage