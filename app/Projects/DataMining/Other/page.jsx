'use client';

import { projectDataOther } from "@/constants";

import Linkable from "@/components/Linkable";
import RightPageNav from "@/components/RightPageNav";

import { useInView } from "react-intersection-observer";

const OtherPage = () => {
  const {ref: patternRef, inView: patternView, entry: patternEntry} = useInView({
    threshold: 1
  });
  const {ref: classRef, inView: classView, entry: classEntry} = useInView({
    threshold: 1
  });
  

  projectDataOther[0].inView = patternView
  projectDataOther[1].inView = classView

  return (
    <>
      <article className='project_article'>
        <div className='max-w-none'>
          <h1 className='break-words text-4xl font-semibold mb-8'>
            Other
          </h1>
          <p className='text-base my-5'>
            This section will be a quick one. Originally, this part would have been split into two. One for 
            Freqent Pattern mining and another for Classification. However, I've haven't 
            taken a look at these two repositories in a while. Compared to the other parts, these two parts were 
            difficult for me. I remember the basic approach, but I can't go in depth like the other parts.
          </p>
          <div ref={patternRef}>
            <h2 id="pattern" className='border-t border-gray-300 pt-10 mt-12 mb-6 font-semibold 
            text-2xl scroll-mt-[75px]'>
              Frequent Pattern Mining
            </h2>
            <p className="mb-5">
              The code for this section can be found in <Linkable
                link={'https://github.com/RaidenXP/Frequent-Pattern-Mining'}
                text={'repository link'}
              />. Similar to the clustering section, a framework was provided. Analysis.py was the only file
              that I created to work with the steam dataset. Patterns.py was where we had to implement the
              apriori algorithm. This algorithm helped identified frequent itemsets or combinations. I 
              thought it would have been a good idea to use this algorithm on genres and tags for games.
              It was a great idea, but my implementation was messy. I did not get a perfect score for this
              part and had some problems when adding more items.
            </p>
            <p className="mb-5">
              In the end, all I know is that the assigment was to implement the apriori algorithm and create
              another function that can extract association rules.
            </p>
          </div>
          <div ref={classRef}>
            <h2 id="class" className='border-t border-gray-300 pt-10 mt-12 mb-6 font-semibold 
            text-2xl scroll-mt-[75px]'>
              Classification
            </h2>
            <p className="mb-5">
              This <Linkable
                link={'https://github.com/RaidenXP/Classification'}
                text={'respository link'}
              /> will have the code for the classification portion. Another framework was provided, with analysis.py
              being the only script that I made. Unfortunately, I did not know how I could use this method of
              data mining the steam dataset. As a result, I had to use a provided mushroom dataset. Classification
              was used to identify what mushrooms were poisonous and what were safe. The only method I recall using
              to perform classification were decision trees.
            </p>
            <p className="mb-5">
              At the start, classification.py was filled with empty functions. We had to fill it out and create 
              the structure of a descision tree. If everything worked, we could start using it on test data. 
              First, we would train our algorithm on certain columns/attributes. Once we chose the right attributes 
              wihtout overfitting, we tested our algorithm on the validation data. My results turned out 
              well. The attributes that I kept an eye on were the odor and ring-type of a mushroom. Eventually, 
              I learned that color, gills, and the cap had a lot of information on telling if a mushroom was 
              poisonous or safe to eat.
            </p>
          </div>
        </div>
      </article>
      <RightPageNav items={projectDataOther}/>
    </>
  )
}

export default OtherPage