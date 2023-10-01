"use client";

import Link from 'next/link';
import Image from 'next/image';

import { useTheme } from "next-themes";

const Logo = () => {
  const { resolvedTheme } = useTheme();

  return (
    <Link 
      href='/'
      className='flex items-center'
    >
      {resolvedTheme === 'dark' ? 
        <Image 
          src={'/n/n-light-100.png'}
          alt='N'
          width={70}
          height={70}
        />
        : 
        <Image
          src={'/n/n-100.png'}
          alt='N'
          width={70}
          height={70}
        />
      }
    </Link>
)
}

export default Logo