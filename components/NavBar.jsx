import Link from 'next/link';
import Image from 'next/image';

import NavList from './NavList';
import MobileNavDrop from './MobileNavDrop';
import ThemeToggle from './ThemeToggle';
import Logo from './Logo';

const NavBar = () => {
  return (
    <nav 
      className={`sticky top-0 w-full z-[100] backdrop-blur-[4px] bg-gradient-to-br from-inherit
      dark:bg-none`}
    >
      <div className='max-w-[1400px] flex flex-wrap md:flex-nowrap md:h-[70px]
      items-center justify-between mx-auto p-4'>
        <Logo/>
        <MobileNavDrop/>
        <div 
          className={`md:flex items-center justify-between w-full md:w-auto hidden`}
        >
          <NavList/>
          <ThemeToggle styles='p-8'/>
        </div>
      </div>
    </nav>
  )
}

export default NavBar