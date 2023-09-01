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
      <article className='w-full min-w-0 max-w-6xl mt-4 px-1 md:px-6 
      min-h-[calc(100vh-103px)] block' 
      >
        <div className='max-w-none'>
          <h1 className='break-words text-4xl font-semibold mb-8'>
            This Portfolio!
          </h1>
          <p className='text-base my-5'>
            This project is officially my second web page. I wanted to create a page
            that can help show off projects that I have worked on. Furthermore, I wanted
            something to show on my resume or during interviews. As of writing this,
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
              believed that the organization was great for what I needed. In addition,
              I used TailwindCSS and NextJS to create this web page. It was actually
              my first time using both of these tools. I've used React before, and I had a
              component library to help place components faster than doing them by hand.
              Therefore, I thought it would be a great idea to use NextJS because it was on the rise and
              TailwindCSS because I wanted some CSS experience under my belt.
            </p>
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
              Lastly, there are three (subject to change) other packages that I used to help with the sites
              creation: <Linkable
                link={'https://react-icons.github.io/react-icons'}
                text={'React Icons'}
              />, <Linkable
                link={'https://www.npmjs.com/package/react-syntax-highlighter'}
                text={'Reat Syntax Highlighter'}
              />, and <Linkable
                link={'https://www.npmjs.com/package/react-intersection-observer'}
                text={'React Intersection Observer'}
              />. React Icons helped provide an icon library. Most of the icons on these
              pages are from this library. React Syntax Highlighter helped me with displaying
              code blocks in certain pages. For example, during the data mining series. Lastly,
              React Intersection Observer, helped me with all of the pages under Projects.
              Notice that the right page side bar will change to purple when in certain sections. 
            </p>
            <p className="mb-5">
              For now, these are all of the tools that I used. I do plan on adding more animations
              to the page. I could try doing them with pure CSS, but I also found some libraries that
              could help.
            </p>
          </div>
          <div ref={plansRef}>
            <h2 id="plans" className='border-t border-gray-300 pt-10 mt-12 mb-6 font-semibold 
              text-2xl scroll-mt-[75px]'>
                Plans for the Future
            </h2>
            <p className="mb-5">
              In the future, as I mentioned above, I want to add more animations to the page.
              I do plan to continue with more solo projects. I want to add them here for people
              to see. Furthermore, if any of my current projects update, I will update the info
              in the Projects page.
            </p>
            <p className="mb-5">
              Most of the other sections will have a results subsection to display what I ended with.
              You don't have to read everything, and I do plan on shortening some sections. Feel free
              to skip to them and see what I have done. In addition, the results for this portfolio
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