'use client';

import { projectDataVisual, partTwoDataMine } from "@/constants";

import Linkable from "@/components/Linkable";
import Code from "@/components/Code";
import RightPageNav from "@/components/RightPageNav";

import Image from "next/image";

import { useInView } from "react-intersection-observer";

const DataVisualPage = () => {
  const {ref: codeRef, inView: codeView, entry: codeEntry} = useInView({
    threshold: 0.1
  });
  const {ref: graphRef, inView: graphView, entry: graphEntry} = useInView({
    threshold: 0.25
  });

  projectDataVisual[0].inView = codeView;
  projectDataVisual[1].inView = graphView;
  
  return (
    <>
      <article className='w-full min-w-0 max-w-6xl mt-4 px-1 md:px-6 
      min-h-[calc(100vh-103px)] block' 
      >
        <div className='max-w-none'>
          <h1 className='break-words text-4xl font-semibold mb-8'>
            Data Visualization
          </h1>
          <p className='text-base my-5'>
            This part of the project simply puts the data into a visual representation.
            I had the option to choose what I wanted to see. I didn't graph all of the
            attributes. I did two types of visuals on my dataset. One that tried to use
            a scatter plot to see Owners vs Positive Reviews. The other method is a bar
            graph showing the count for each genre in steam.
          </p>
          <div ref={codeRef}>
            <h2 id="code" className='border-t border-gray-300 pt-10 mt-12 mb-6 font-semibold 
            text-2xl scroll-mt-[75px]'>
              Code
            </h2>
            <p className="my-5">
              The first part of the function in this script initializes all of the data. Then I
              grabbed the attributes that I needed. In this case, the owners count, positive
              review count, and negative review count. The two empty arrays are for after
              data modification, so that I can use them for graphing.
            </p>
            <Code
              title={'data_vis_1.py'}
              code={partTwoDataMine[0]}
              style={'my-5'}
              lang={'python'}
            />
            <p className="my-5">
              The next two loops helps modify the data to make it easier to graph them. It's been
              a long time since I reviewed the data, so I'm not completely sure why I
              even wrote those loops. However, I think the first loop had to do with how the owner count
              was formatted. I believe that the numbers had commas so I removed them. They were strings and 
              I needed numbers. The second loop did a calculation to get the percentage of positive reviews 
              from the total amount of reviews. Later when you will see the scatter plot and it will show 
              the density of positive reviews. The plots that are more green will have 
              a higher percentage of postive reviews. More white plots will have more negative reviews.
            </p>
            <Code
              title={'data_vis_1.py'}
              code={partTwoDataMine[1]}
              style={'my-5'}
              lang={'python'}
              startingNum={13}
            />
            <p className="my-5">
              Lastly, the final lines are just for setting up the graph.
            </p>
            <Code
              title={'data_vis_1.py'}
              code={partTwoDataMine[2]}
              style={'my-5'}
              lang={'python'}
              startingNum={24}
            />
            <p className="my-5">
              Now for the second type of graph. On this script, I made four different graphs
              to show off this second type where we will see the genre count. I made 2 bar 
              graphs and 2 word clouds that are associated with their bar graph. The bigger
              the word in the word clouds the more games that have that genre. For the first
              bar graph and word cloud, they deal with games who have comibinations of genres.
              Because the data already provided that, it was pretty easy to get the count and
              separate the genres into their categories.
            </p>
            <Code
              title={'data_vis_2.py'}
              code={partTwoDataMine[3]}
              style={'my-5'}
              lang={'python'}
            />
            <p className="my-5">
              For the second bar graph and word cloud. It was a bit tougher. Now I had to separate all of
              genres into their single genre. Rather than a combination. Many games would be counted again
              in different genres, but thats okay because techincally they are part of that category. The first
              loop will get all of the genres and split them. We will have a set of genres, so there will
              be no duplicates. The second loop will grab the games with the specific genre and add the
              count to that specific singular category.
            </p>
            <Code
              title={'data_vis_2.py'}
              code={partTwoDataMine[4]}
              style={'my-5'}
              lang={'python'}
              startingNum={12}
            />
            <p className="my-5">
              Lastly again, the rest is just setting up the graphs and creating the word clouds using the 
              WordCloud package.
            </p>
            <Code
              title={'data_vis_2.py'}
              code={partTwoDataMine[5]}
              style={'my-5'}
              lang={'python'}
              startingNum={32}
            />
            <p className="my-5">
              Above are the bar graphs and beneath are the word clouds.
            </p>
            <Code
              title={'data_vis_2.py'}
              code={partTwoDataMine[6]}
              style={'mb-5'}
              lang={'python'}
              startingNum={48}
            />
          </div>
          <div ref={graphRef}>
            <h2 id="graphs" className='border-t border-gray-300 pt-10 mt-12 mb-6 font-semibold 
            text-2xl scroll-mt-[75px]'>
              Graphs
            </h2>
            <p className="mb-5">
              Beneath is the Owners vs Positive Reviews graph. I understand it may be hard to see.
              My <Linkable
                link={'https://github.com/RaidenXP/Data_Visualization'}
                text={'repository link'}
              /> will include the images of the graphs and the code above as well. That way, you can
              see the images more clearly on github of on your own device.
            </p>
            <p className="my-5">
              Back to the graph beneath, it may look odd for a scatter plot. This is because after
              reading the API documentation again, the owner count is more of a categorical value
              rather than a continuous value. The owner count is a rough estimate of how many
              owners have the game and puts it within a range. Still, the graph shows that 
              more ownership of a game means more positive reviews a game can have. However, even if a game
              had a lot of owners and positive reviews, it doesn't mean its doing well. The color bar
              is for that reason. I wanted to see if the game has more positive reviews versus their
              negative reviews. You can see that some of the bigger games on the top right are not solid
              green and closer to the middle. This means there are a lot of positive and negative reviews.
            </p>
            <figure className='my-5 flex justify-evenly items-center content-center'>
              <Image
                src={'/data-mining/Owners_vs_Pos_Revs.png'}
                alt="owners vs pos revs"
                width={700}
                height={700}
              />
            </figure>
            <p className="my-5">
              The next graphs are the bar graphs. The top one is the singular genres on their own. The bottom
              one contains data on all the combinations. For the singular one, 'indie' had the most games.
              In the combinations graph, the genre 'action' on its own was the highest.
            </p>
            <figure className='my-5 flex justify-evenly items-center content-center'>
              <Image
                src={'/data-mining/Genres_and_Top20GenreCombos_vs_GameCount.png'}
                alt="owners vs pos revs"
                width={700}
                height={700}
              />
            </figure>
            <p className="my-5">
              This first word cloud is the one for combinations.
            </p>
            <figure className='my-5 flex justify-evenly items-center content-center'>
              <Image
                src={'/data-mining/GenreCombos_WordCloud.png'}
                alt="owners vs pos revs"
                width={700}
                height={700}
              />
            </figure>
            <p className="my-5">
              The final word cloud is the genres on their own.
            </p>
            <figure className='mb-5 flex justify-evenly items-center content-center'>
              <Image
                src={'/data-mining/Genre_WordCloud.png'}
                alt="owners vs pos revs"
                width={700}
                height={700}
              />
            </figure>
          </div>
        </div>
      </article>
      <RightPageNav items={projectDataVisual}/>
    </>
  )
}

export default DataVisualPage