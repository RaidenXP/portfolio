'use client';

import { projectGameAIPath, partOneGameAI } from "@/constants";

import RightPageNav from "@/components/RightPageNav";
import Linkable from "@/components/Linkable";
import Code from "@/components/Code";

import { useInView } from "react-intersection-observer";

import Image from "next/image";

const PathPage = () => {
  const {ref: moveRef, inView: moveView, entry: moveEntry} = useInView({
    threshold: 0.23
  });
  const {ref: navRef, inView: navView, entry: navEntry} = useInView({
    threshold: 0.15
  });
  const {ref: algoRef, inView: algoView, entry: algoEntry} = useInView({
    threshold: 1
  });
  const {ref: resultsRef, inView: resultsView, entry: resultsEntry} = useInView({
    threshold: 0.21
  });

  projectGameAIPath[0].inView = moveView;
  projectGameAIPath[1].inView = navView;
  projectGameAIPath[2].inView = algoView;
  projectGameAIPath[3].inView = resultsView;

  return (
    <>
      <article className='w-full min-w-0 max-w-6xl mt-4 px-1 md:px-6 
      min-h-[calc(100vh-103px)] block' 
      >
        <div className='max-w-none'>
          <h1 className='break-words text-4xl font-semibold mb-8'>
            Path Finding
          </h1>
          <p className='text-base my-5'>
            As I mentioned in the main page of this series, my professor provided frameworks for each part.
            We had to fill out the important parts to get the entire program running. For this section,
            I did most of the work. My partner and I had a hard time, but I understood how most of the
            theories and algorithms worked. Therefore, I took lead for this part of the project.
          </p>
          <p className="my-5">
            Path finding requires movement and a way to navigate the map. For the entity in our program,
            we call it Boid. We had to give Boid movement and a way to learn how to navigate a map. As
            you'll see later, a NavMesh and utilization of specific algorithms will help Boid navigate
            a map.
          </p>
          <p className="mb-5">
            To follow along, this <Linkable
              link={'https://github.com/RaidenXP/Movement-and-Pathfinding'}
              text={'repository link'}
            /> has all of the code.
          </p>
          <div ref={moveRef}>
            <h2 id="movement" className='border-t border-gray-300 pt-10 mt-12 mb-6 font-semibold 
            text-2xl scroll-mt-[75px]'>
              Movement
            </h2>
            <p className="mb-5">
              For Boid's movment, the kinematics and the physics were already implemented by the professor.
              All we had to do was figure out how Boid should turn towards the destination, speed up to head
              towards the destination, and slow down when it gets near the destination.
            </p>
            <p className="my-5">
              To be honest, all of the math to solve the movement has left my brain. I will try my best
              to explain the basics though. To start off, we must find our current position. Fortunately,
              there is already a function to do so in the project framework. From there, we calculate
              the linear distance from current to destination. Then we calculate how much we have to
              rotate by using arc tangent. Processing provides a function atan2() to help with this.
            </p>
            <Code
              title={'Boid.pde'}
              code={partOneGameAI[0]}
              style={'my-5'}
              lang={'java'}
              startingNum={48}
            />
            <p className="my-5">
              Once we are facing the right direction and know how far we are from the destination,
              we gradually increase our speed. In addition, we set values to know when we should
              start slowing down. In my case, I set an arrival angle of 90 degrees and a distance
              of 300. This means when facing that direction, once we are within 90 degrees we 
              should start slowing down. Next, once the distance is 300 away we start to slow
              down linearly.
            </p>
            <figure className='my-5 flex justify-evenly items-center content-center'>
              <video 
                preload="auto" 
                width={600} 
                height={600} 
                autoPlay 
                loop 
                controls 
                muted
                src="/game-ai/game-ai-movement.mkv"
              />
            </figure>
            <p className="my-5">
              Next for the movement section was implementing waypoints. This was pretty simple.
              Just create a list of destinations, and once the destination is reached remove
              it from the list. 
            </p>
            <p className="my-5">
              Next, you must also make it so that it does not slow down at every
              destination. It should only slow down when it is making big angle turns. For example,
              turning more than 90 degrees. If this is not accounted for, Boid will slow down at every
              point, and it would look awkward. 
            </p>
            <p className="my-5">
              You can do this by taking the dot product from your current direction and future direction. 
              If it is greater than 0 and less than equal to 1, you are still going in the same general direction. 
              If it is less than or equal to 0, then the next direction is behind Boid. 
              All I remember is if you take the dot product of two vectors (directions), 1 equals parallel
              and 0 equals perpendicular. -1 is parallel but pointing the opposite way.
            </p>
            <figure className='mb-5 flex justify-evenly items-center content-center'>
              <video 
                preload="auto" 
                width={600} 
                height={600} 
                autoPlay 
                loop 
                controls 
                muted
                src="/game-ai/game-ai-waypoints.mkv"
              />
            </figure>
          </div>
          <div ref={navRef}>
            <h2 id="nav" className='border-t border-gray-300 pt-10 mt-12 mb-6 font-semibold 
            text-2xl scroll-mt-[75px]'>
              NavMesh
            </h2>
            <p className="mb-5">
              Now that Boid can move by us clicking the destination or following a list of waypoints, 
              how does it go to a destination without running into walls or without our help? The solution
              is by creating a NavMesh. This was the hardest part of the project. Conceptually, it was
              straightforward, but coding it was difficult.
            </p>
            <p className="my-5">
              The professor made things easier by creating the maps for us. In addition, the walls of every
              map were organized in a list. The walls were also ordered to be counter clock wise. The image
              below should clarify. I drew yellow arrows explaining what I mean. The arrows are pointing in
              the direction of how to travel along the walls.
            </p>
            <figure className='my-5 flex justify-evenly items-center content-center'>
              <Image
                src={'/game-ai/map-draw.PNG'}
                alt="map image"
                width={600}
                height={600}
              />
            </figure>
            <p className="my-5">
              With the order of the walls known to us, we move on to the next step: turning the map into
              a convex shape. Technically, split the map into many convex shapes until we can't anymore.
              Why a convex shape? Well a convex shape is really good because from one
              point to another inside the shape, it will always be reachable. No walls will be in the way.
            </p>
            <p className="my-5">
              The first step towards creating a convex shape is by finding the reflex vertices. A reflex vertex 
              is where two lines form an angle greater than 90 degress. Fortunately,
              we have a lot of information about the walls of the map. The walls are a class that has certain
              properties. Two important properties that we will need are their normal directions and directions.
              As we traverse the list, we will need the normal direction of the current wall and the direction of
              the next wall. Then we take their dot products.
            </p>
            <p className="my-5">
              In our case, the normal direction points away from the interior of the map.
              Therefore, if the normal direction is pointing in the same direction as the next walls
              direction, there is a reflex angle. The image below should help clarify. Reflex angles
              are in red and directions are in yellow. The normal vector is pointing away from the
              interior in green.
            </p>
            <figure className='my-5 flex justify-evenly items-center content-center'>
              <Image
                src={'/game-ai/reflex-angles.PNG'}
                alt="reflex angles"
                width={600}
                height={600}
              />
            </figure>
            <p className="my-5">
              Recall that the walls are counter clockwise. So if the current walls green arow is pointing in the
              same general direction as the next walls yellow arrow, there is a red circle (reflex angle) 
              between them.
            </p>
            <p className="my-5">
              Finally, once we have our reflex vertices, we connect them with the vertex that is the shortest
              distance away.
            </p>
            <figure className='my-5 flex justify-evenly items-center content-center'>
              <video 
                preload="auto" 
                width={600} 
                height={600} 
                autoPlay 
                loop 
                controls 
                muted
                src="/game-ai/game-ai-nav.mkv"
              />
            </figure>
            <p className="my-5">
              Feel free to pause the video to take a closer look at each map. Notice that all the shapes
              are convex. None have angles greater than 90. Also, notice that there are dots in the center.
              Those will act as waypoints. However, we don't want to move from center to center. We will move
              from the shared edge of two polygons to another shared edge of two polygons. 
              Video below should clarify. The pink line will be similar to how the AI travels.
            </p>
            <figure className='mb-5 flex justify-evenly items-center content-center'>
              <video 
                preload="auto" 
                width={600} 
                height={600} 
                autoPlay 
                loop 
                controls 
                muted
                src="/game-ai/game-ai-nav-way.mkv"
              />
            </figure>
          </div>
          <div ref={algoRef}>
            <h2 id="algo" className='border-t border-gray-300 pt-10 mt-12 mb-6 font-semibold 
            text-2xl scroll-mt-[75px]'>
              A* and Breadth First Search
            </h2>
            <p className="mb-5">
              Finally, all that's left is to make it so that we can simply click and boid will get there
              without any problems. To accomplish this, we used A*. This is probably one of the most
              famous search algorithms. I included Breadth First Search in the title as well because
              it will help us write A*. I basically implemented the A* algorithm on top of Breadth
              First Search.
            </p>
            <p className="my-5">
              I'm sure there are many websites and videos that can explain these two algorithms well, so
              I will shortly go through these two. BFS utilizes a queue to keep track of our neighbors and 
              what node we should look at next. A* built on top of BFS is simmilar. However, instead we use
              a prioity queue to keep track of the shortest neighbor. In addtion, we use a heuristic
              to help us know which neighbor is the shortest. In our case, the heuristic is the distance
              from a polygon's center to the destination.
            </p>
            <p className="mb-5">
              The heuristic and priority queue will ensure the shortest path. Once we reach the destination,
              we will have a list of visited nodes, so we just reverse the list to have the order we should
              travel in. Also, this list will act as Boid's waypoints. Boid has to follow them to
              reach the destination.
            </p>
          </div>
          <div ref={resultsRef}>
            <h2 id="results" className='border-t border-gray-300 pt-10 mt-12 mb-6 font-semibold 
            text-2xl scroll-mt-[75px]'>
              Results
            </h2>
            <p className="mb-5">
              Next will be four videos showing how Boid navigates without any problems.
            </p>
            <figure className='my-5 flex justify-evenly items-center content-center'>
              <video 
                preload="auto" 
                width={600} 
                height={600} 
                autoPlay 
                loop 
                controls 
                muted
                src="/game-ai/results-1.mkv"
              />
            </figure>
            <figure className='my-5 flex justify-evenly items-center content-center'>
              <video 
                preload="auto" 
                width={600} 
                height={600} 
                autoPlay 
                loop 
                controls 
                muted
                src="/game-ai/results-3.mkv"
              />
            </figure>
            <figure className='my-5 flex justify-evenly items-center content-center'>
              <video 
                preload="auto" 
                width={600} 
                height={600} 
                autoPlay 
                loop 
                controls 
                muted
                src="/game-ai/results-4.mkv"
              />
            </figure>
            <figure className='my-5 flex justify-evenly items-center content-center'>
              <video 
                preload="auto" 
                width={600} 
                height={600} 
                autoPlay 
                loop 
                controls 
                muted
                src="/game-ai/results-2.mkv"
              />
            </figure>
            <p className="mb-5">
              It's not perfect, but it works really well. If Boid does hit a wall, it is suppose
              to stop completely. I noticed that there were close cases. Fortunately, it didn't
              crash.
            </p>
          </div>
        </div>
      </article>
      <RightPageNav items={projectGameAIPath}/>
    </>
  )
}

export default PathPage