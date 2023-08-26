'use client';

import { projectGameAIPCG } from "@/constants";

import RightPageNav from "@/components/RightPageNav";
import Linkable from "@/components/Linkable";

import { useInView } from "react-intersection-observer";

import Image from "next/image";

const PCGPage = () => {
  const {ref: primRef, inView: primView, entry: primEntry} = useInView({
    threshold: 0.15
  });
  const {ref: resultsRef, inView: resultsView, entry: resultsEntry} = useInView({
    threshold: 0.28
  });
  
  projectGameAIPCG[0].inView = primView
  projectGameAIPCG[1].inView = resultsView

  return (
    <>
      <article className='w-full min-w-0 max-w-6xl mt-4 px-1 md:px-6 
      min-h-[calc(100vh-103px)] block' 
      >
        <div className='max-w-none'>
          <h1 className='break-words text-4xl font-semibold mb-8'>
            Procedural Content Generation: Mazes
          </h1>
          <p className='text-base my-5'>
            Content Generation is most likely one of the largest topics in AI.
            From generating images to creating entire stories and scenarios, AI 
            is constantly improving and generating more and more content.
          </p>
          <p className="my-5">
            Believe it or not, content generation has been around for a long time especially
            in the gaming industry. It has been used to help decrease production time. For example,
            by generating maps or trees. One of the earliest games to utilize PCG is Rogue. It used
            PCG to create maps. Similar to this project, we will also be focusing on generating a
            map. Specifically a maze.
          </p>
          <p className="mb-5">
            This part has a framework provided, and the code can be found in this <Linkable
              link={'https://github.com/RaidenXP/Maze-Generation'}
              text={'repository link'}
            />. The only thing that had to be done for this project was to create 
            a grid for the maze. Then use Prim's or Kruskal's Algorithm to remove walls
            and ensure that no loops are in the maze.
          </p>
          <figure className='mb-5 flex flex-col items-center content-center'>
            <Image
              src={'/game-ai/rogue.jpg'}
              alt='rogue'
              width={500}
              height={500}
            />
            <figcaption className='text-center mt-5'>
              Credits
              to <Linkable
                link='https://store.steampowered.com/app/1443430/Rogue/'
                text='Steam'
              /> for the image.
            </figcaption>
          </figure>
          <div ref={primRef}>
            <h2 id="prim" className='border-t border-gray-300 pt-10 mt-12 mb-6 font-semibold 
            text-2xl scroll-mt-[75px]'>
              Prim's Algorithm
            </h2>
            <p className="mb-5">
              Prim's Algorithm is used for graphs. It is a greedy algorithm that ensures the creation
              of a minimum spanning tree. This means that there will be no loops or cycles within
              a graph. The image below shows that the darker color graph is the MST (minimum spanning tree).
            </p>
            <figure className='my-5 flex flex-col items-center content-center'>
              <Image
                src={'/game-ai/mst.png'}
                alt='mst'
                width={400}
                height={400}
              />
              <figcaption className='text-center mt-5'>
                Credits
                to <Linkable
                  link='https://en.wikipedia.org/wiki/Minimum_spanning_tree'
                  text='Wikipedia'
                />
              </figcaption>
            </figure>
            <p className="my-5">
              So how would this work for a maze or a grid? The maze has no value or weight,
              so where should we start and how do we determine what's next? Just choose randomly!
              We will have a grid for the entire map. Each square will be called a cell.
            </p>
            <p className="my-5">
              Prim's algorithm has a few data structures that will hold information for us.
              We will have a visited that will keep track of what cell has already joined the maze.
              Then there will also be a frontier, which will collect all available walls from the cell 
              that has just been visited.
            </p>
            <p className="my-5">
              We will choose at random, one of these walls in the frontier to remove. If the wall
              is connected to a cell that is part of the maze and another cell that is not part
              of the maze, then we remove it from the map and the frontier. Otherwise, if the wall is 
              connected to two cells within the maze we keep it and remove it from the frontier. In addition,
              if the wall is connected to one cell and is the outer wall of the map, we keep
              it and remove it from the frontier.
            </p>
            <p className="mb-5">
              We just rinse and repeat until our frontier is equal to how many cells we have or if our frontier
              reaches zero.
            </p>
          </div>
          <div ref={resultsRef}>
            <h2 id="results" className='border-t border-gray-300 pt-10 mt-12 mb-6 font-semibold 
            text-2xl scroll-mt-[75px]'>
              Results
            </h2>
            <p className="mb-5">
              The three images below are mazes with the size of 200 pixels. The first two
              are the same, but one has waypoints. The reason for this is that for extra credit
              we could have combined our path finding code and have Boid travel through the maze.
              The last one is just another size 200 maze.
            </p>
            <figure className='my-5 flex flex-col items-center content-center'>
              <div className="flex xl:flex-row flex-col items-center content-center mb-2">
                <Image
                  src={'/game-ai/grid_size_200_maze_2.PNG'}
                  alt='grid200_2'
                  width={350}
                  height={350}
                  className="xl:mr-2 xl:mb-0 mb-2"
                />
                <Image
                  src={'/game-ai/grid_size_200_maze_3.PNG'}
                  alt='grid200_3'
                  width={350}
                  height={350}
                />
              </div>
              <Image
                src={'/game-ai/grid_size_200_maze_1.PNG'}
                alt='grid200_1'
                width={350}
                height={350}
              />
            </figure>
            <p className="my-5">
              Two different size 50 mazes. One has the NavMesh on the other doesn't.
            </p>
            <figure className='my-5 flex flex-col items-center content-center'>
              <Image
                src={'/game-ai/grid_size_50_maze_1.PNG'}
                alt='grid50_1'
                width={550}
                height={550}
                className="mb-2"
              />
              <Image
                src={'/game-ai/grid_size_50_maze_2.PNG'}
                alt='grid50_2'
                width={550}
                height={550}
              />
            </figure>
            <p className="my-5">
              Two different size 10 pixels mazes. One has the NavMesh on the other doesn't.
            </p>
            <figure className='mb-5 flex flex-col items-center content-center'>
              <Image
                src={'/game-ai/grid_size_10_maze_1.PNG'}
                alt='grid10_1'
                width={550}
                height={550}
                className="mb-2"
              />
              <Image
                src={'/game-ai/grid_size_10_maze_2.PNG'}
                alt='grid10_2'
                width={550}
                height={550}
              />
            </figure>
          </div>
        </div>
      </article>
      <RightPageNav items={projectGameAIPCG}/>
    </>
  )
}

export default PCGPage