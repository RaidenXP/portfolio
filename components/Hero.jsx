import Image from "next/image";
import Link from "next/link";

const Hero = () => {
  return (
    <section >
        <div 
          className="
          py-8 px-4 mx-auto max-w-screen-xl lg:py-16
          grid grid-rows-12 lg:gap-8 xl:gap-0 lg:grid-cols-12"
        >
          <div className="hidden lg:mt-0 lg:col-span-5 lg:flex">
              <Image
                src={'/me/me2.jpg'}
                width={750}
                height={750}
                className="rounded-[88px] shadow-[0px_25px_9px_-5px_rgba(0,0,0,0.24)]"
              />
          </div>
          <div 
            className="mx-auto place-self-center lg:col-span-7 row-span-3"
          >
            <h1 
              className="mb-4 text-4xl font-extrabold tracking-tight leading-none text-gray-900 
              md:text-5xl xl:text-6xl"
            >
              Hi, I'm <span className="text-violet-600">Nathan Tran</span>
            </h1>
            <p 
              className="max-w-2xl mb-6 font-[335] text-black lg:mb-8 md:text-lg lg:text-xl"
            >
              Software Engineer with a Bachelor's Degree in
              <span> </span>
              <span 
                className="font-bold bg-gradient-to-br from-blue-200 to-violet-900 
                bg-clip-text text-transparent"
              >
                Computer Science
              </span>
            </p>
          </div>
          <div className="lg:hidden row-span-9 h-auto max-w-lg mx-auto">
              <Image
                src={'/me/me2.jpg'}
                width={750}
                height={750}
                className="rounded-[88px] shadow-[0px_25px_9px_-5px_rgba(0,0,0,0.24)]"
              />
          </div>
        </div>
        
        
        <div 
          className="grid md:grid-cols-2 gap-8 py-8 px-4 mx-auto max-w-screen-xl lg:py-16"
        >
          <div 
            className="bg-violet-50 border border-violet-200 rounded-lg p-8 md:p-12 shadow-xl"
          >
            <div 
              className="bg-purple-100 text-purple-800 text-xs font-medium inline-flex items-center px-2.5 
              py-0.5 rounded-md mb-2"
            >
                <svg 
                  className="w-2.5 h-2.5 mr-1.5" 
                  aria-hidden="true" 
                  xmlns="http://www.w3.org/2000/svg" 
                  fill="none" 
                  viewBox="0 0 20 16"
                >
                  <path 
                    stroke="currentColor" 
                    stroke-linecap="round" 
                    stroke-linejoin="round" 
                    stroke-width="2" 
                    d="M5 4 1 8l4 4m10-8 4 4-4 4M11 1 9 15"
                  />
                </svg>
                Projects
            </div>
            <h2 
              className="text-gray-900 text-3xl font-extrabold mb-2"
            >
              Start with Flowbite Design System
            </h2>
            <p 
              className="text-lg font-normal text-gray-500 mb-4"
            >
              Static websites are now used to bootstrap lots of websites and are becoming the 
              basis for a variety of tools that even influence both web designers and developers.
            </p>
            <Link 
              href="/Projects" 
              className="text-violet-600 hover:underline font-medium text-lg inline-flex items-center"
            >
              Read more
                <svg 
                  className="w-3.5 h-3.5 ml-2" 
                  xmlns="http://www.w3.org/2000/svg" 
                  fill="none" 
                  viewBox="0 0 14 10"
                >
                  <path 
                    stroke="currentColor" 
                    stroke-linecap="round" 
                    stroke-linejoin="round" 
                    stroke-width="2" 
                    d="M1 5h12m0 0L9 1m4 4L9 9"
                  />
                </svg>
            </Link>
          </div>


          <div className="bg-violet-50 border border-violet-200 rounded-lg p-8 md:p-12 shadow-xl">
            <div className="bg-purple-100 text-purple-800 text-xs 
              font-medium inline-flex items-center px-2.5 py-0.5 rounded-md mb-2"
            >
                <svg 
                  className="w-2.5 h-2.5 mr-1.5" 
                  xmlns="http://www.w3.org/2000/svg" 
                  fill="currentColor" 
                  viewBox="0 0 18 18"
                >
                  <path 
                    d="M17 11h-2.722L8 17.278a5.512 5.512 0 0 1-.9.722H17a1 1 0 0 0 1-1v-5a1 1 0 0 0-1-1ZM6 
                    0H1a1 1 0 0 0-1 1v13.5a3.5 3.5 0 1 0 7 0V1a1 1 0 0 0-1-1ZM3.5 15.5a1 1 0 1 1 0-2 1 1 0 
                    0 1 0 2ZM16.132 4.9 12.6 1.368a1 1 0 0 0-1.414 0L9 3.55v9.9l7.132-7.132a1 1 0 0 0 0-1.418Z
                  "/>
                </svg>
                About
            </div>
            <h2 className="text-gray-900 text-3xl font-extrabold mb-2">
              Best react libraries around the web
            </h2>
            <p className="text-lg font-normal text-gray-500 mb-4">
              Static websites are now used to bootstrap lots of websites and are 
              becoming the basis for a variety of tools that even influence both 
              web designers and developers.
            </p>
            <Link href="/About" 
              className="text-violet-600 hover:underline font-medium text-lg inline-flex items-center"
            >
              Read more
                <svg 
                  className="w-3.5 h-3.5 ml-2" 
                  xmlns="http://www.w3.org/2000/svg" 
                  fill="none" 
                  viewBox="0 0 14 10"
                >
                  <path 
                    stroke="currentColor" 
                    stroke-linecap="round" 
                    stroke-linejoin="round" 
                    stroke-width="2" 
                    d="M1 5h12m0 0L9 1m4 4L9 9"
                  />
                </svg>
            </Link>
          </div>
        </div>
    </section>
  )
}

export default Hero