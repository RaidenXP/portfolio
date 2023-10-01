"use client";

import Link from 'next/link';
import Image from 'next/image';

import { useTheme } from "next-themes";

const FooterLinks = () => {
  const { resolvedTheme } = useTheme();

  return (
    <div className='flex-1 flex justify-end gap-10'>
      <Link href='https://www.linkedin.com/in/nathan-tran-a6455b164/' target='_blank' rel='noopener noreferrer'>
        {resolvedTheme === 'dark' ? 
          <Image 
            src={'/linkedin-mark/linkedin-dark.svg'}
            alt='linkedin'
            width={30}
            height={30}
          />
          : 
          <Image 
            src={'/linkedin-mark/linkedin.svg'}
            alt='linkedin'
            width={30}
            height={30}
          />
        }
      </Link>
      <Link href='https://github.com/RaidenXP' target='_blank' rel='noopener noreferrer'>
        {resolvedTheme === 'dark' ? 
          <Image 
          src={'/github-mark/github-mark-white.svg'}
            alt='linkedin'
            width={30}
            height={30}
          />
          : 
          <Image 
            src={'/github-mark/github-mark.svg'}
            alt='github'
            width={30}
            height={30}
          />
        }
      </Link>
      <Link href='https://twitter.com/Raiden_NT' target='_blank' rel='noopener noreferrer'>
        {resolvedTheme === 'dark' ? 
          <Image 
            src={'/twitter-mark/twitter-dark.svg'}
            alt='linkedin'
            width={30}
            height={30}
          />
          : 
          <Image 
            src={'/twitter-mark/twitter.svg'}
            alt='github'
            width={30}
            height={30}
          />
        }
      </Link>
    </div>
  )
}

export default FooterLinks