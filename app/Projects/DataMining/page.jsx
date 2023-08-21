'use client';

import { projectDataMain } from "@/constants";
import RightPageNav from "@/components/RightPageNav";
import SeriesCard from "@/components/SeriesCard";
import Linkable from "@/components/Linkable";

import Image from "next/image";

import { useInView } from "react-intersection-observer";

const DataMiningPage = () => {
  const {ref: langRef, inView: langView, entry: langEntry} = useInView({
    threshold: 1
  });
  const {ref: partsRef, inView: partsView, entry: partsEntry} = useInView({
    threshold: 1
  });

  projectDataMain[0].inView = langView
  projectDataMain[1].inView = partsView

  return (
    <>
      <article className='w-full min-w-0 max-w-6xl mt-4 px-1 md:px-6 
      min-h-[calc(100vh-103px)] block' 
      >
        <div className='max-w-none'>
          <h1 className='break-words text-4xl font-semibold mb-8'>Data Mining Series</h1>
          <p className='text-base my-5'>
            Data mining is a topic that I have a lot of interest in. Before taking the class at
            Cal Poly Pomona, I always thought that it was extracting data and using it to get information
            early. For example, finding secret content from a video game file. Well technically, I wasn't
            100% wrong on the extracting part. However, data mining is more about extracting large amounts 
            of data and finding certain patterns or trends on them (info) to improve a product or simply 
            for learning.
          </p>
          <p className="mb-5">
            This project was done during my time in Cal Poly Pomona. It was for my class,
            and it was a very useful experience. It taught me a lot about python and data mining.
          </p>
          <h2 ref={langRef} id="lang" className='border-t border-gray-300 pt-10 mt-12 mb-6 font-semibold 
          text-2xl scroll-mt-[75px]'>
            Language Used
          </h2>
          <p className="mb-5">
            The language used for this project was Python. It has many great libraries, such as pandas and 
            matplotlib to help organize data and plot them. This was one of my first python projects, so I
            wasn't very comfortable working on this. I didn't really understand the concept of using
            other libraries and the syntax of the language. However, eventually after some practice,
            videos, and documentation I found that the language is pretty simple to use.
          </p>
          <figure className='my-5 flex justify-evenly items-center content-center'>
            <Image
              src={'/spot-web-app/python.png'}
              alt='python image'
              width={150}
              height={150}
            />
          </figure>
          <h2 id="parts" className='border-t border-gray-300 pt-10 mt-12 mb-6 font-semibold 
          text-2xl scroll-mt-[75px]'>
            Parts
          </h2>
          <p>
            For this project, it will be told in a series of five parts. I will take you along my journey when
            I learned data mining in my Cal Poly Pomona course. Underneath are cards that will allow you 
            to go to any part of the project. The sidebar also allows that. However, I recommend starting
            from the first part Data Extraction then going in order. For most of the series, 
            I used <Linkable link='https://steamspy.com/' text={`SteamSpy's`}/> API. The creator for this site 
            made it easier to extract steam data and data mine it.
          </p>
        </div>
        <div ref={partsRef} className="mt-16 grid grid-cols-1 gap-8 sm:grid-cols-2">
          <SeriesCard 
            link='/Projects/DataMining/DataExtraction' 
            title='Data Extraction' 
            description='Part One of the Series. Focuses on how I extracted the data from the API.'
          />
          <SeriesCard 
            link='/Projects/DataMining/DataVisualization' 
            title='Data Visualization' 
            description='Part Two of the Series. I create graphs and ways to visualize the data.'
          />
          <SeriesCard 
            link='/Projects/DataMining/Clustering' 
            title='Clustering' 
            description='Part Three of the Series. Clustering data and using specific algorithms to do so.'
          />
          <SeriesCard 
            link='/Projects/DataMining/FrequentPatternMining' 
            title='Frequent Pattern Mining' 
            description='Part Four of the Series. Frequent Pattern Mining and the algorithms that
            were used.'
          />
          <SeriesCard 
            link='/Projects/DataMining/Classification' 
            title='Classification' 
            description='Part Five of the Series. Focuses on Classification, but I had to use a different dataset.'
          />
        </div>
      </article>
      <RightPageNav items={projectDataMain}/>
    </>
  )
}

export default DataMiningPage