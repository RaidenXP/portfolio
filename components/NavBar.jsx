import Link from 'next/link';
import Image from 'next/image';

import NavList from './NavList';
import MobileNavDrop from './MobileNavDrop';

const NavBar = () => {
  return (
    <nav 
      className={`sticky top-0 w-full z-[100] backdrop-blur-[4px] bg-gradient-to-br from-inherit`}
    >
      <div className='max-w-[1400px] flex flex-wrap md:flex-nowrap md:h-[70px]
      items-center justify-between mx-auto p-4'>
        <Link 
          href='/'
          className='flex items-center'
        >
          <Image
            src={'/n/n-100.png'}
            alt='N'
            width={70}
            height={70}
          />
        </Link>
        <MobileNavDrop/>
        <div 
          className={`items-center justify-between w-full md:flex md:w-auto hidden`}
        >
          <NavList/>
        </div>
      </div>
    </nav>
  )
}

export default NavBar