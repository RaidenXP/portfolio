'use client';

import { projectDataExtract, partOneDataMine } from "@/constants"
import RightPageNav from "@/components/RightPageNav"
import Linkable from "@/components/Linkable";
import Code from "@/components/Code";

import Image from "next/image";

import { useInView } from "react-intersection-observer"

const DataExtractionPage = () => {
  const {ref: codeRef, inView: codeView, entry: codeEntry} = useInView({
    threshold: 0.2
  });
  const {ref: resultsRef, inView: resultsView, entry: resultsEntry} = useInView({
    threshold: 0.49
  });
  
  projectDataExtract[0].inView = codeView
  projectDataExtract[1].inView = resultsView

  return (
    <>
      <article className='w-full min-w-0 max-w-6xl mt-4 px-1 md:px-6 
      min-h-[calc(100vh-103px)] block' 
      >
        <div className='max-w-none'>
          <h1 className='break-words text-4xl font-semibold mb-8'>
            Data Extraction
          </h1>
          <p className='text-base my-5'>
            For the entire series, I will be showing both the code and the results.
            It has been a long time since reviewing this series, so I will try my best to explain
            what is going on. For this first part, it is pretty straightforward. I wrote a script
            to extract data using 
            the <Linkable link={'https://steamspy.com/'} text={`SteamSpy's`}/> API. I'm not really
            proud with how I wrote it because it was my first time using all of these tools. 
            It feels and looks ineffiecent. Even today, I am still new with these concepts because
            I don't regularly use them.
          </p>
          <div ref={codeRef}>
            <h2 id="code" className='border-t border-gray-300 pt-10 mt-12 mb-6 font-semibold 
            text-2xl scroll-mt-[75px]'
            >
              Code
            </h2>
            <p className="mb-5">
              The section below are my imports for this first script. This isn't the main script.
              This will be used in the main script to retrieve a csv file. I imported the pandas
              library to create a dataframe and turn it into a csv. The get_request_amt is another
              script used to get a certain amount of items based on the page requested. The API
              only gave 1000 games for one page. Therefore, I requested 10 pages for 10000 games.
              Lastly, requests is another package provided by python to help make requests from
              the API.
            </p>
            <Code
              code={partOneDataMine[0]}
              lang='python'
              style='my-5'
              title='data_collection.py'
            />
            <p className="my-5">
              After the imports, I initialize the database based on what attributes I want. I'm not sure if this
              is the right way to do it though. Beneath that is the url to the API. Then I send the url
              to the getRequest function in the get_request_amt.py script with an extra parameter for
              10 pages.
            </p>
            <Code
              code={partOneDataMine[1]}
              lang='python'
              style='my-5'
              title='data_collection.py'
              startingNum={4}
            />
            <p className="my-5">
              Here is the get_request_amt.py script. I import requests in here as well. There is also time
              to help ensure that all requests from the specified page amount arrives. The outer loop loops
              until the specified amount of pages are met. The inner loop has to deal with how the response
              comes back. I think I needed only a part of it, and I turned it into a string to hold.
            </p>
            <Code
              code={partOneDataMine[3]}
              lang='python'
              style='my-5'
              title='get_request_amt.py'
            />
            <p className="my-5">
              This final portion, loops through the pages and gets all of the games from each page.
              Each game will be its own row. The variable current is there so that if someone wanted
              only five games then they can include the paramater 'rows' with the value of five.
            </p>
            <Code
              code={partOneDataMine[2]}
              lang='python'
              style='my-5'
              title='data_collection.py'
              startingNum={19}
            />
            <p className="mb-5">
              Main.py which is not included here simply calls the function from data_collection.py to
              retrieve the dataset.
            </p>
          </div>
          <div ref={resultsRef}>
            <h2 id="results" className='border-t border-gray-300 pt-10 mt-12 mb-6 font-semibold 
            text-2xl scroll-mt-[75px]'
            >
              Results
            </h2>
            <p className="my-5">
              It might be hard to see, but the result is just a csv file. You can find the csv
              file 'steam_games' in my <Linkable
                link={'https://github.com/RaidenXP/Data-Extraction'}
                text={'Github Respository'}
              />. You can also find the same code above here.
            </p>
            <Image
              src='/data-mining/results.png'
              alt="results"
              width={700}
              height={700}
              className="mb-5"
            />
          </div>
        </div>
      </article>
      <RightPageNav items={projectDataExtract}/>
    </>
  )
}

export default DataExtractionPage