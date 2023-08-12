import ProjectList from './ProjectList';

const SideBar = () => {
  return (
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
          {/**LIST OF PROJECTS HERE*/}
          <ProjectList/>
        </nav>
      </div>
    </div>
  )
}

export default SideBar