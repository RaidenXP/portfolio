'use client';

import { projectGameAIMain } from "@/constants";

import RightPageNav from "@/components/RightPageNav";
import SeriesCard from "@/components/SeriesCard";
import Linkable from "@/components/Linkable";

import { useInView } from "react-intersection-observer";

import Image from "next/image";

const GameAIPage = () => {
  const {ref: toolsRef, inView: toolsView, entry: toolsEntry} = useInView({
    threshold: 1
  });
  const {ref: partsRef, inView: partsView, entry: partsEntry} = useInView({
    threshold: 1
  });

  projectGameAIMain[0].inView = toolsView;
  projectGameAIMain[1].inView = partsView

  return (
    <>
      <article className='w-full min-w-0 max-w-6xl mt-4 px-1 md:px-6 
      min-h-[calc(100vh-103px)] block' 
      >
        <div className='max-w-none'>
          <h1 className='break-words text-4xl font-semibold mb-8'>
            Game AI Series
          </h1>
          <p className='text-base my-5'>
            Video games are very important to me. They are one of the reasons I chose
            Computer Science as a major. Artificial Intelligence is on the rise and is
            getting better by the year. This section is another project that I went
            through during my time in Cal Poly Pomona.
          </p>
          <p className="my-5">
            I worked with one other. I didn't know my partner and we never met in class. 
            It was a weird partnership, but we got the work done. The reason why I'm
            mentioning this is because of how the work was split up. We were both new to the topic and
            busy with other classes. Part one I wrote the majority of the solution. I would say
            95 percent. Second part we equally worked together. Part three, they wrote the majority
            of the code. I tried a different approach, but it was inefficient.
          </p>
          <p className="mb-5">
            Overall, I really loved this class. I took an AI class before this one, so understanding
            some topics was pretty easy. I hope to one day apply what I learned here in an actual
            game. I do plan on creating a simple game soon and post it here in the portfolio.
          </p>
          <div ref={toolsRef}>
            <h2 id="tools" className='border-t border-gray-300 pt-10 mt-12 mb-6 font-semibold 
            text-2xl scroll-mt-[75px]'>
              Tools Used
            </h2>
            <p className="mb-5">
              The main tool used here was <Linkable 
              link={'https://processing.org/'} 
              text={'processing'}/>. It is a graphical library and IDE 
              used to create images or animations. On their site they describe themselves as a sketchbook.
              The programming language used in this IDE is similar to Java.
            </p>
            <figure className='mb-5 flex justify-evenly items-center content-center'>
              <Image
                src={'/game-ai/processing.png'}
                width={150}
                height={150}
                alt="processing image"
              />
            </figure>
          </div>
          <div ref={partsRef}>
            <h2 id="parts" className='border-t border-gray-300 pt-10 mt-12 mb-6 font-semibold 
            text-2xl scroll-mt-[75px]'>
              Parts
            </h2>
            <p className="mb-5">
              This series is divided into three parts. Similarly to the data mining series, 
              my professor provided a framework to work with. However, the major parts 
              were empty, and it was up to us to fill it out and solve the problem.
            </p>
            <div className="mt-16 grid grid-cols-1 gap-8 sm:grid-cols-2">
              <SeriesCard 
                link='/Projects/GameAI/Path'
                title='Path Finding' 
                description='Part one deals with path finding. We had to get an entity to traverse
                a maze without giving it direct waypoints.'
              />
              <SeriesCard 
                link='/Projects/WIP' // /Projects/GameAI/Hanabi
                title='Hanabi Gameplay' 
                description='In part two, my partner and I attempted to get an AI to achieve a good score
                in the card game Hanabi.'
              />
              <SeriesCard 
                link='/Projects/WIP' // /Projects/GameAI/PCG
                title='PCG: Mazes' 
                description='Part three goes into one of my favorite topics: PCG. Here we generate
                mazes based on certain parameters.'
              />
            </div>
          </div>
        </div>
      </article>
      <RightPageNav items={projectGameAIMain}/>
    </>
  )
}

export default GameAIPage