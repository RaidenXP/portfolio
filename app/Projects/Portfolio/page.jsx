'use client';

import { projectPort } from "@/constants";

import RightPageNav from "@/components/RightPageNav";
import Linkable from "@/components/Linkable";

import { useInView } from "react-intersection-observer";

import Image from "next/image";

const PortfolioDescription = () => {
  const {ref: toolsRef, inView: toolsView, entry: toolsEntry} = useInView({
    threshold: 1
  });
  const {ref: plansRef, inView: plansView, entry: plansEntry} = useInView({
    threshold: 1
  });

  projectPort[0].inView = toolsView
  projectPort[1].inView = plansView

  return (
    <>
      <article className='project_article'>
        <div className='max-w-none'>
          <h1 className='break-words text-4xl font-semibold mb-8'>
            This Portfolio!
          </h1>
          <p className='text-base my-5'>
            This project is officially my second web page. I wanted to create a page
            that can help show off projects that I have worked on. As of writing this,
            I am currently looking for a job. I can only hope that this will increase
            my chances.
          </p>
          <div ref={toolsRef}>
            <h2 id="tools" className='border-t border-gray-300 pt-10 mt-12 mb-6 font-semibold 
              text-2xl scroll-mt-[75px]'>
                Tools Used
            </h2>
            <p className="mb-5">
              The sites design was heavily influenced by <Linkable
                link={'https://tailwindcss.com/'}
                text={'TailwindCSS'}
              /> and <Linkable
                link={'https://nextjs.org/'}
                text={`NextJS's`}
              /> docs page. I wanted to see if I could implement something similar. I also
              believed that the organization qualified for what I needed. In addition,
              I used TailwindCSS and NextJS to create this web page. It was actually
              my first time using both of these tools. I've used React before, and I had a
              component library to help place pre-built components.
              Therefore, I thought it would be a great idea to use NextJS because it is on the rise.
              In addition, trying TailwindCSS would help me get some CSS experience and learn how
              to craft components without a library.
            </p>
            <figure ref={toolsRef} className='my-5 flex justify-evenly items-center content-center'>
              <Image
                src={'/port/Nextjs-logo.png'}
                alt='nextjs'
                width={150}
                height={150}
              />
              <Image
                src={'/port/tailwind-1.png'}
                alt='tailwindcss'
                width={150}
                height={150}
              />
            </figure>
            <p className="my-5">
              Because it was my first time using TailwindCSS or CSS in general, sites such as <Linkable
                link={'https://tailwindcomponents.com/cheatsheet/'}
                text={`Tailwind Component's Cheat Sheet`}
              /> and <Linkable
                link={'https://flowbite.com/'}
                text={'Flowbite'}
              /> provided assistance with design inspiration and remembering what CSS properties I needed.
            </p>
            <p className="mb-5">
              Lastly, there are four (subject to change) other packages that I used to help with the sites
              creation: <Linkable
                link={'https://react-icons.github.io/react-icons'}
                text={'React Icons'}
              />, <Linkable
                link={'https://www.npmjs.com/package/react-syntax-highlighter'}
                text={'Reat Syntax Highlighter'}
              />, <Linkable
                link={'https://www.framer.com/motion/'}
                text={'Framer Motion'}
              />, and <Linkable
                link={'https://www.npmjs.com/package/react-intersection-observer'}
                text={'React Intersection Observer'}
              />. React Icons helped provide an icon library. Most of the icons on each
              page are from this library. React Syntax Highlighter helped me display
              code blocks in certain pages. For example, during the data mining series. Framer 
              Motion helped with many of the animations. Most are used in the About Page, but 
              there are a few more for mobile/smaller screens. Lastly,
              React Intersection Observer, helped me with all of the Project pages.
              Notice that the right page side bar will change to purple when in view of the specified section. 
            </p>
          </div>
          <div ref={plansRef}>
            <h2 id="plans" className='border-t border-gray-300 pt-10 mt-12 mb-6 font-semibold 
              text-2xl scroll-mt-[75px]'>
                Plans for the Future
            </h2>
            <p className="mb-5">
              In the future, I want to add more transitions to the page, and find a better way
              to load in images and videos.
              I do plan to continue with more solo projects. I want to add them here for people
              to see. Furthermore, if any of my current projects update, I will update the info
              here in the Project Box.
            </p>
            <p className="mb-5">
              Most of the other sections will have a results subsection to display what I ended with.
              You don't have to read everything, and I do plan on shortening some sections. Feel free
              to skip to the results and see what I have done. In addition, the results for this portfolio
              is this page itself. Feel free look around and see what I have done for each section.
            </p>
          </div>
        </div>
      </article>
      <RightPageNav items={projectPort}/>
    </>
  )
}

export default PortfolioDescription