import Link from 'next/link';
import Image from 'next/image';

const Footer = () => {
  return (
    <footer className='w-full mx-auto border-t border-solid border-violet-200'>
      <div 
        className="max-w-full mx-auto flex justify-between items-center flex-wrap 
        py-[36px] md:py-[40px] md:px-[60px] px-4 min-h-[100px]"
      >
        <p className='black text-xl font-bold'>Nathan Tran's Other Links</p>
        <div className='footer__links'>
            <Link href='https://www.linkedin.com/in/nathan-tran-a6455b164/' target='_blank' rel='noopener noreferrer'>
              <Image 
                src={'/linkedin-mark/linkedin.svg'}
                alt='linkedin'
                width={30}
                height={30}
              />
            </Link>
            <Link href='https://github.com/RaidenXP' target='_blank' rel='noopener noreferrer'>
              <Image 
                  src={'/github-mark/github-mark.svg'}
                  alt='github'
                  width={30}
                  height={30}
              />
            </Link>
            <Link href='https://twitter.com/Raiden_NT' target='_blank' rel='noopener noreferrer'>
              <Image 
                  src={'/twitter-mark/twitter.svg'}
                  alt='twitter'
                  width={25}
                  height={25}
              />
            </Link>
        </div>
      </div>
    </footer>
  )
}

export default Footer