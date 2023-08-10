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
            className="bg-violet-50 border border-violet-200 rounded-lg p-8 md:p-12 shadow-lg"
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
              A list of Projects
            </h2>
            <p 
              className="text-lg font-normal text-gray-500 mb-4"
            >
              I've worked on many solo and group projects. Each provided a lot of learning opportunities.
              On this page I will go over my favorite and interesting projects that I have been a part
              of.
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


          <div className="bg-violet-50 border border-violet-200 rounded-lg p-8 md:p-12 shadow-lg">
            <div className="bg-indigo-100 text-indigo-800 text-xs 
              font-medium inline-flex items-center px-2.5 py-0.5 rounded-md mb-2"
            >
                <Image
                  src={'/about-mark/about-24.svg'}
                  width={17}
                  height={17}
                  className="pr-1"
                />
                About
            </div>
            <h2 className="text-gray-900 text-3xl font-extrabold mb-2">
              Recent Graduate actively looking for jobs
            </h2>
            <p className="text-lg font-normal text-gray-500 mb-4">
              I attended California State Polytechnic University, Pomona and studied Computer Science.
              Cal Poly helped me learn a lot about Computer Science, but I am specifically interested
              in Software Engineering and App Development.
            </p>
            <Link href="/About" 
              className="text-indigo-600 hover:underline font-medium text-lg inline-flex items-center"
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