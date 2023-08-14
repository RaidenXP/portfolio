import Link from "next/link"

const Projects = () => {
  return (
    <>
      <article className='w-full min-w-0 max-w-6xl mt-4 px-1 md:px-6 
      min-h-[calc(100vh-103px)] block' 
      >
        <div className='max-w-none'>
          <h1 className='break-words text-4xl font-semibold mb-8'>Intro</h1>
          <p className='text-base my-5'>Welcome to the project box!</p>
          <h2 id='what-is-this' className='border-t border-gray-300 pt-10 mt-12 mb-6 
          font-semibold text-2xl scroll-mt-[75px]'>
            What's the Project Box?
          </h2>
          <p className='mb-5'>
            The project box is where you will get to experience the projects that I have worked on.
            I will go over my thought process for each of them and the steps on creating them.
            These projects are only a few of the ones that I have worked on, but they are the ones
            that are important to me. I've learned the most from these projects, and I enjoyed working
            on all of them.
          </p>
          <h2 id='table-of-contents' className='border-t border-gray-300 pt-10 mt-12 mb-6 font-semibold 
          text-2xl scroll-mt-[75px]'>
            Table Of Contents
          </h2>
          <p className='mb-5'>
            List of Projects:
          </p>
          <table className='my-7 w-full table-auto text-left text-sm 
          indent-0 border-collapse border-inherit table'>
            <thead className='border-b border-gray-300'>
              <tr>
                <th className='pt-[1px] pl-0 pr-2 pb-2'>Project</th>
                <th className='pt-[1px] pl-2 pr-0 pb-2'>Description</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b border-gray-300">
                <td className="pl-[0px] py-2 pr-2">
                  <Link
                    href='/Projects/SpotColWebApp'
                    className="text-violet-700"
                  >
                    Spotify Collab Web App
                  </Link>
                </td>
                <td className="pl-2 py-2 pr-[0px]">
                  My first project in the world of web development. I worked with three others, and we split
                  the team into a front-end and back-end group. I worked on the front-end for this project.
                </td>
              </tr>
              <tr className="border-b border-gray-300">
                <td className="pl-[0px] py-2 pr-2">
                  <Link
                    href='/Projects/SousChef'
                    className="text-violet-700"
                  >
                    Sous Chef
                  </Link>
                </td>
                <td className="pl-2 py-2 pr-[0px]">
                  My first mobile app project. I did this one solo using Flutter. An open-source UI
                  software development kit created by Google. The goal was to create an app 
                  to help store cooking recipes.
                </td>
              </tr>
              <tr className="border-b border-gray-300">
                <td className="pl-[0px] py-2 pr-2">
                  <Link
                    href='/Projects/TrainingTracker'
                    className="text-violet-700"
                  >
                    Training Tracker
                  </Link>
                </td>
                <td className="pl-2 py-2 pr-[0px]">
                  A mobile app that I am currently working on with one other. We wanted to create an app
                  that can easily track workout days and specific workouts done in those days.
                </td>
              </tr>
              <tr className="border-b border-gray-300">
                <td className="pl-[0px] py-2 pr-2">
                  <Link
                    href='/Projects/DataMining'
                    className="text-violet-700"
                  >
                    Data Mining Series
                  </Link>
                </td>
                <td className="pl-2 py-2 pr-[0px]">
                  Five-part series on special topics for Data Mining. These are python scripts that I've wrote
                  for one of my classes to extract data from Steam and analyze the results.
                </td>
              </tr>
              <tr className="border-b border-gray-300">
                <td className="pl-[0px] py-2 pr-2">
                  <Link
                    href='/Projects/GameAI'
                    className="text-violet-700"
                  >
                    Game AI Series
                  </Link>
                </td>
                <td className="pl-2 py-2 pr-[0px]">
                  Three part series on special topics for Game AI. Another series of class projects to help
                  understand real world AI methods used in Video games
                </td>
              </tr>
              <tr className="border-b border-gray-300">
                <td className="pl-[0px] py-2 pr-2">
                  <Link
                    href='/Projects/RayTracing'
                    className="text-violet-700"
                  >
                    Raytracing Series
                  </Link>
                </td>
                <td className="pl-2 py-2 pr-[0px]">
                  I will be going over the different components of a raytracer that a partner and I have built
                  for a class project. The Raytracer does basic operations, such as displaying primitive shapes,
                  light manipulation, and transformations.
                </td>
              </tr>
              <tr>
                <td className="pl-[0px] py-2 pr-2">
                  <Link
                    href='/Projects/Portfolio'
                    className="text-violet-700"
                  >
                    Portfolio
                  </Link>
                </td>
                <td className="pl-2 py-2 pr-[0px]">
                  Another of the few web development projects I have done. This is officially my second one;
                  however, I have done other web page projects, but they were solely following tutorials.
                  For this project, I've been utilizing parts and pieces of what I learned to create something
                  of my own.
                </td>
              </tr>
            </tbody>
          </table>
          <h2 id='navigation' className='border-t border-gray-300 pt-10 mt-12 mb-6 font-semibold 
          scroll-mt-[75px] text-2xl'>
            How to Navigate Around
          </h2>
          <p className='mb-5'>
            To navigate around the project box, I've created a sidebar that lists all of the projects from
            the table of contents. However, if you are on mobile, you can find this side bar by clicking
            Menu found on top of your screen under the logo and navigation button. In addition, the 
            table of contents above has clickable links to help go straight to whatever project you would 
            like to see first.
          </p>
          <p className="my-5">
            If you are on desktop or a larger screen, there will be a right-side navagation bar that will help
            you traverse a page quickly to specific headers within the current page.
          </p>
          <p className='mb-5'>
            Lastly, on the bottom of the page are three icon links that can take you to my LinkedIn, GitHub, or
            Twitter page.
          </p>
          <h2 id='credits' className='border-t border-gray-300 pt-10 mt-12 mb-6 font-semibold scroll-mt-[75px] text-2xl'>
            Credits
          </h2>
          <p className="mb-5">
            Before continuing, I just wanted to thank maybe of the different "docs" pages
            from <span className="inline underline text-violet-700">
              <Link href='https://tailwindcss.com/' target='_blank' rel='noopener noreferrer'>
                TailwindCSS
              </Link>   
            </span> and <span className="inline underline text-violet-700">
              <Link href='https://nextjs.org/' target='_blank' rel='noopener noreferrer'>
                NextJS
              </Link>
            </span> for 
            heavily influencing the design for this page. 
            I thought it was the best looking/oragnization
            method to store a list of my projects.
          </p>
        </div>
      </article>
      

      {/** Whats on the page */}
      <nav
        className='w-56 shrink-0 order-last hidden lg:block'
      >
        <div className='sticky top-[126px] h-[calc(100vh-121px)]'>
          <div className='mb-1 mt-[7px] text-sm font-medium text-black'>
            On this page
          </div>
          <div className='relative'>
            <ul className='space-y-2.5 py-2 text-sm overflow-y-auto max-h-[70vh]'>
              <li>
                <Link href='#what-is-this' className='block text-gray-600 hover:text-violet-700 leading-[1.6]'>
                  What's the Project Box?
                </Link>
              </li>
              <li>
                <Link href='#table-of-contents' 
                className='block text-gray-600 hover:text-violet-700 leading-[1.6]'>
                  Table Of Contents
                </Link>
              </li>
              <li>
                <Link href='#navigation'
                className='block text-gray-600 hover:text-violet-700 leading-[1.6]'>
                  How to Navigate Around
                </Link>
              </li>
              <li>
                <Link href='#credits' className='block text-gray-600 hover:text-violet-700 leading-[1.6]'>
                  Credits
                </Link>
              </li>
            </ul>
          </div>
          <div className='pt-5 mt-3 space-y-2 text-sm text-gray-900 border-t border-gray-300'></div>
        </div>
      </nav>
    </>
  )
}

export default Projects