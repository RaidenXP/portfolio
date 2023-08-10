import SideBar from '@/components/SideBar'
import React from 'react'

const ProjectLayout = ({ children }) => {
  return (
    <div className='relative max-w-screen-xl px-4 py-10 mx-auto md:flex md:py-10 md:flex-row'>
      <SideBar/>
      {children}
    </div>
  )
}

export default ProjectLayout