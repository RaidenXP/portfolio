'use client';

import { projectDataCluster, partThreeDataMine } from "@/constants";

import Linkable from "@/components/Linkable";
import Code from "@/components/Code";
import RightPageNav from "@/components/RightPageNav";

import Image from "next/image";

import { useInView } from "react-intersection-observer";

const ClusteringPage = () => {
  const {ref: frameworkRef, inView: frameworkView, entry: frameworkEntry} = useInView({
    threshold: 0.73
  });
  const {ref: algoRef, inView: algoView, entry: algoEntry} = useInView({
    threshold: 0.40
  });
  const {ref: codeRef, inView: codeView, entry: codeEntry} = useInView({
    threshold: 0.15
  });
  const {ref: resultsRef, inView: resultsView, entry: resultsEntry} = useInView({
    threshold: 0.13
  });

  projectDataCluster[0].inView = frameworkView
  projectDataCluster[1].inView = algoView
  projectDataCluster[2].inView = codeView
  projectDataCluster[3].inView = resultsView
  
  return (
    <>
      <article className='w-full min-w-0 max-w-6xl mt-4 px-1 md:px-6 
      min-h-[calc(100vh-103px)] block' 
      >
        <div className='max-w-none'>
          <h1 className='break-words text-4xl font-semibold mb-8'>
            Clustering
          </h1>
          <p className='text-base my-5'>
            Part three of this series contains a lot of code. Most of the code was actually
            provided by my professor, and we were only required to complete a specific algorithm
            for clustering: K-means aka Lloyds Algorithm. Simply put, clustering is a method 
            for placing objects into groups. These objects are usually similar and can help data 
            analysts learn something about their entries.
          </p>
          <div ref={frameworkRef}>
            <h2 id="framework" className='border-t border-gray-300 pt-10 mt-12 mb-6 font-semibold 
            text-2xl scroll-mt-[75px]'>
              Framework Structure  
            </h2>
            <p className="mb-5">
              As I mentioned earlier, most of the code was provided by my professor. The framework
              includes many files. and a README.md that contains information on those 
              files. This <Linkable
                link={'https://github.com/RaidenXP/Clustering'}
                text={'respository link'}
              /> will have all of the files, so it will be easier for you to follow along, see, and try out
              the code.
            </p>
            <p className="my-5">
              The files that I created were analysis.py and make_norm_csv.py. Analysis.py was created to
              use k-means and k-mediods on my dataset. I wanted to see if I could find distinct clusters
              based on their postive reviews versus their negative reviews. The other file, make_norm_csv.py,
              was created to normalize the dataset. I had some problems with some of the data values, so I
              needed to normalize it to make it easier to graph. I took all of the numerical collumns and
              made it so that the value would be from 0 to 1.
            </p>
            <p className="mb-5">
              Lastly, the three important provided files to keep an eye out for are
              clustering.py, testcases.py, and colorpalette.py. Clustering.py was where we had to 
              implement k-means. We could optionally implement k-mediods as well. It was an empty
              file with functions that we had to fill out. If the implementations worked, we could
              use testcases.py to test our algorithm. For example, the call 'python testcases.py 01q'
              would call on the first test case, and in README.md it would have an expected result.
              You could also just run 'python testcases.py' and get a menu and use it that way.
              Colorpalette.py is another fun application that was provided. It creates a
              color palette for an image (jpg or png) based on how many centers you specify (5 by default).
              These centers are the cluster centers. Furthermore, you can redraw the image using the
              new color palette.
            </p>
          </div>
          <div ref={algoRef}>
            <h2 id="algo" className='border-t border-gray-300 pt-10 mt-12 mb-6 font-semibold 
            text-2xl scroll-mt-[75px]'>
              K-means/Lloyds and K-mediods
            </h2>
            <p className="mb-5">
              It has been a while since I've used or seen these two algorithms, and I am sure that
              reading anywhere else will be better for you to understand how they work. However,
              I will still try to go over both of them based on how I approached them.
            </p>
            <p className="my-5">
              For K-means, I learned to start off each cluster with a random center if no center was specified.
              From there, for each instace in the data set, group them to a center that is the shortest distance
              away from them. For distance, we used the euclidean distance formula. 
            </p>
            <figure className='flex flex-col mb-5 items-center content-center'>
              <Image
                src={'/data-mining/euclidean_distance.png'}
                alt='euclidean distance'
                width={500}
                height={500}
              />
              <figcaption className='text-center mt-5'>
                Credit 
                to <Linkable
                  link='https://www.turing.com/kb/how-to-decide-perfect-distance-metric-for-machine-learning-model'
                  text='Turing'
                />
              </figcaption>
            </figure>
            <p className="my-5">
              After the instances are put into their cluster, we will calculate the average of all the instances
              in each cluster and that will be the next center. This could go on forever; however we had
              other variables in place. 
            </p>
            <p className="my-5">
              In the code, we could limit the amount of times the operation should go
              on, or we could record the previous centers and calculate the new distance between the new centers
              to see if the change was meaningful. The second option is in place because there is a chance that
              the centers may not change by a significant amount.
            </p>
            <p className="mb-5">
              K-mediods is very similar. The only difference is how the centers are chosen. The centers have
              to be actual instances rather than an average value that may or may not be an instance. After,
              clusters are formed, new centers are found by checking for an instance that is the closest to
              every other instance. Basically finding the middle/median of a data set rather than an
              average.
            </p>
          </div>
          <div ref={codeRef}>
            <h2 id="code" className='border-t border-gray-300 pt-10 mt-12 mb-6 font-semibold 
            text-2xl scroll-mt-[75px]'>
              Code  
            </h2>
            <p className="mb-5">
              I this code section, I will only provide my implementation for k-means. There is a lot of code, and
              it can be found in the repository link above.
            </p>
            <p className="my-5">
              All of the code below is from clustering.py. There are two major functions k-means and k-medioids.
              Within these functions are helper functions to make the process easier to do. Dist will calculate
              the distance between the center and an instance using the euclidean distance formula. To calculate
              one must measure all columns included. Because a 2D graph is easier to show, most of the test cases
              and my own graph are done with only two columns.
            </p>
            <p className="my-5">
              Mean takes the average of all instances in a cluster to calculate the new center. Calc_threshold
              takes basically checks how much the previous centers moved. If the movement, is lower than our
              eps (designated threshold value) then we stop all operations.
            </p>
            <Code
              title={'clustering.py'}
              code={partThreeDataMine[0]}
              style={'my-5'}
              lang={'python'}
            />
            <p className="my-5">
              This next section initializes the amount of k's or clusters we need. If no center has been 
              specified, we will choose random centers within the data. Next, if the number of iterations
              are not specified, then the default value will be 10. Therefore, we will only run the 
              operation 10 times by default.
            </p>
            <Code
              title={'clustering.py'}
              code={partThreeDataMine[1]}
              style={'my-5'}
              lang={'python'}
              startingNum={35}
            />
            <p className="my-5">
              Here is the meat of the code. We have an outer while loop to check if we should stop all 
              operations or not. The first for loop will go through every instance and and check which
              center it belongs with. The next loop starting on line 73 will calculate the new centers
              to start the operation all over again. The if statement on line 78 will check if the
              threshold satisfies the eps. If the threshold is less than the eps, then everything 
              stops. Otherwise, the loop will keep going until the next check, or until we reach
              the max iterations.
            </p>
            <Code
              title={'clustering.py'}
              code={partThreeDataMine[2]}
              style={'my-5'}
              lang={'python'}
              startingNum={55}
            />
          </div>
          <div ref={resultsRef}>
            <h2 id="results" className='border-t border-gray-300 pt-10 mt-12 mb-6 font-semibold 
            text-2xl scroll-mt-[75px]'>
              Results  
            </h2>
            <p className="mb-5">
              The following are results from using K-means/Lloyds algorithm. I ended up with full credit
              for this assignment and feedback saying that my implementation was find and working. I 
              definitely wouldn't say that it was written well. I'm sure there are more efficient
              ways to write the algorithm.
            </p>
            <p className="my-5">
              The image beneath is the cluster on my steam data set using positive review vs negative ones.
              As you can see, outliers really affected the graph. Three clusters were made. One for the outliers
              and two others for higher review count games and lower ones. Honestly, I'm not sure what I can
              say about the clusters, but its obvious that popular games would have more reviews. At the time,
              the two games that were outliers were PUBG and CSGO. Probably the two biggest games on
              steam at the time or maybe today. By the way, when I say biggest games I don't mean
              player count. I mean how well known they are. Positive reviews is the x axis. Negative
              the y.
            </p>
            <figure className='my-5 flex justify-evenly items-center content-center'>
              <Image
                src={'/data-mining/steam-cluster.jpg'}
                width={600}
                height={600}
              />
            </figure>
            <p className="my-5">
              The next two images are from the testcases.py file. You can try out your own implementation
              with this file if you know how to set it up. These images are of test case three titled
              'Three Clusters single step'. This means that we are creating three k's and only going 1
              step (n = 1). Recall from the code section n is 10 if n is not specified. After a single
              step, you can see the second image showing the centers move. Centers are marked with the
              + symbol.
            </p>
            <figure className='my-5 flex flex-col justify-evenly items-center content-center'>
              <Image
                src={'/data-mining/step-1-test-3.jpg'}
                width={600}
                height={600}
                className="mb-5"
              />
              <Image
                src={'/data-mining/step-2-test-3.jpg'}
                width={600}
                height={600}
              />
            </figure>
            <p className="my-5">
              These two images utilize the colorpalette.py file. This is the application that
              the professor provided to have some fun with pictures. By default it creates five
              colors (clusters) then redraws the image with those colors. It tries to put the
              pixel to its associated cluster. You can see the five colors on the top left of the
              image before redrawing. If your k-means algorithm works, then this application should 
              work properly.
            </p>
            <figure className='my-5 flex flex-col justify-evenly items-center content-center'>
              <Image
                src={'/data-mining/bae.PNG'}
                width={500}
                height={500}
                className="mb-3"
              />
              <Image
                src={'/data-mining/bae-redraw.PNG'}
                width={500}
                height={500}
              />
            </figure>
            <figure className='mb-5 flex xl:flex-row flex-col justify-evenly items-center content-center'>
              <Image
                src={'/data-mining/pandagirl.PNG'}
                width={300}
                height={300}
                className="mb-5 xl:mb-0"
              />
              <Image
                src={'/data-mining/pandagirl-redraw.PNG'}
                width={300}
                height={300}
              />
            </figure>
          </div>
        </div>
      </article>
      <RightPageNav items={projectDataCluster}/>
    </>
  )
}

export default ClusteringPage