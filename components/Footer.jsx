import Link from 'next/link';
import Image from 'next/image';

const Footer = () => {
  return (
    <footer>
      <div className="max-w-screen-xl flex justify-between items-center flex-wrap mt-10 border-t border-current mx-auto p-4">
        <p className='black text-xl font-bold'>Nathan Tran's Other Links</p>
        <div className='footer__links'>
            <Link href='https://www.linkedin.com/in/nathan-tran-a6455b164/'>
                <Image 
                  src={'linkedin-mark/linkedin.svg'}
                  width={30}
                  height={30}
                />
            </Link>
            <Link href='https://github.com/RaidenXP'>
              <Image 
                  src={'github-mark/github-mark.svg'}
                  width={30}
                  height={30}
              />
            </Link>
            <Link href='https://twitter.com/Raiden_NT'>
              <Image 
                  src={'twitter-mark/twitter.svg'}
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