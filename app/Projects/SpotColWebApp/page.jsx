'use client';

import RightPageNav from '@/components/RightPageNav'
import Linkable from '@/components/Linkable';
import { projectSpot } from '@/constants'
import Image from 'next/image'
import { useInView } from 'react-intersection-observer';

const SpotColWebAppPage = () => {
  const {ref: teamsRef, inView: teamsView, entry: teamsEntry} = useInView({
    threshold: 0.8
  });
  const {ref: toolsRef, inView: toolsView, entry: toolsEntry} = useInView({
    threshold: 0.3
  });
  const {ref: resultsRef, inView: resultsView, entry: resultsEntry} = useInView({
    threshold: 0.31
  });

  projectSpot[0].inView = teamsView;
  projectSpot[1].inView = toolsView;
  projectSpot[2].inView = resultsView;

  return (
    <>
      <article className='w-full min-w-0 max-w-6xl mt-4 px-1 md:px-6 
      min-h-[calc(100vh-103px)] block' 
      >
        <div className='max-w-none'>
          <h1 className='break-words text-4xl font-semibold mb-8'>Spotify Collaboration Web App</h1>
          <p className='text-base my-5'>
            This project is my first web development app. I worked with three others to create a web service
            that would help users collaborate with others to create playlists they can all listen to. We utilized
            Spotify's API and authenthication to allow users to login, search, and start creating playlists.
          </p>
          <div ref={teamsRef}>
            <h2 id='teams' className='border-t border-gray-300 pt-10 mt-12 mb-6 
            font-semibold text-2xl scroll-mt-[75px]'>
              Teams
            </h2>
            <p ref={teamsRef} className='mb-5'>
              Because there were four of us, we split the work into two teams: a front-end and back-end team. At the 
              time, there were many choices on what tools we should use. In addition, it was our first time
              working on a web dev project.
            </p>
            <p className='my-5'>
              Eventually, we decided to use python flask for our back-end because python was a language that
              we were comfortable with. For our front-end choice, we wanted to do something with Java, but
              I was curious and wanted to try working with Javascript. The language is prominent in the web dev
              industry and it has many libraries for making user interfaces. As a result, we ended up with
              React.
            </p>
            <figure className='mb-5 items-center content-center'>
              <Image
                src={'/spot-web-app/frontback.png'}
                alt='front-end vs back-end'
                width={700}
                height={700}
              />
              <figcaption className='text-center mt-5'>
                Credit 
                to <Linkable
                  link='https://kenzie.snhu.edu/blog/front-end-vs-back-end-whats-the-difference/'
                  text='Kenzie Academy'
                />
              </figcaption>
            </figure>
          </div>
          <div ref={toolsRef}>
            <h2 id='tools' className='border-t border-gray-300 pt-10 mt-12 mb-6 
            font-semibold text-2xl scroll-mt-[75px]'>
              Tools Used
            </h2>
            <p className='mb-5'>
              Lets start with the IDE. Well its not really an IDE, but its a very very good tool for editing
              source code in my 
              opinion: <span className='font-semibold'>
                Visual Studio Code
              </span>. I first started using this when I transfered into Cal Poly Pomona. My Java teacher showed
              us this editor, and I was very confused on what I had to do to use it. There were so many plug-ins
              and problems that I faced. However, now its my favorite editor. Before this, I mainly did C++, so I
              used Visual Studio. I thought the two were the same things.
            </p>
            <p className='my-5'>
              Anyways, lets continue. For back-end development, I mentioned that we used python as our language.
              We found a library known as <Linkable 
              link='https://flask.palletsprojects.com/en/2.3.x/' 
              text='Python Flask'
              />. Flask gave us an API to fetch data from. With other python libraries 
              we could communicate with Spotify's API and authenthication tools. This allowed us to let users
              sign in and start making playlists for their accounts. Furthermore, we made calls to our back-end
              to make queries for songs based on artists, title, or genre. Unfortunately, only the top
              5 songs were retrieved per artist. I'm not sure about the reason for this because I mainly worked on
              the front-end. I believe it was because we were restricted somehow. Maybe we were missing some
              options in our calls.
            </p>
            <figure ref={toolsRef} className='my-5 flex justify-evenly items-center content-center'>
              <Image
                src={'/spot-web-app/python.png'}
                alt='python image'
                width={150}
                height={150}
              />
              <Image
                src={'/spot-web-app/flask.png'}
                alt='flask image'
                width={150}
                height={150}
              />
            </figure>
            <p className='my-5'>
              I don't know what it is, but I really enjoy front-end development. I'll admit I'm not very creative,
              but I love seeing a website or mobile app come together. Getting the functionality and layout of
              working is just so satisfying. For this project, I was heavily influced by Flutter. I'll
              go over it more in my mobile app projects. Because I worked with Flutter before
              this project, I wanted something similar. Therefore, instead of using traditional 
              CSS, I found <Linkable 
                link='https://mui.com/' 
                text='MUI'
              />. It is a component library that contains many modern designs that companies, such as
              Spotify, Neflix, and Amazon use. It was quick and easy to put in components that I needed for the
              site. By the way, I'm not using MUI for this site though. I really wanted to try CSS and Tailwind.
              It's my first time and it has been pretty fun.
            </p>
            <figure className='mb-5 flex justify-evenly items-center content-center'>
              <Image
                src={'/spot-web-app/react.png'}
                alt='react image'
                width={150}
                height={150}
              />
              <Image
                src={'/spot-web-app/mui.png'}
                alt='MUI image'
                width={150}
                height={150}
              />
            </figure>
          </div>
          <div ref={resultsRef}>
            <h2 id='results' className='border-t border-gray-300 pt-10 mt-12 mb-6 
            font-semibold text-2xl scroll-mt-[75px]'>
              Results
            </h2>
            <p className='mb-5'>
              After a few of months working together, we had our minimum viable project. Unfortunately
              as of today, the website is not working. We used Heroku to host our site, but it went down for
              some reason. I think it is because of our inactivity. I tried to get it up and running 
              on local host, so I can get some photos. However, I ran into an error where the redirect wasn't
              working anymore. Therefore, I only have a few images showing what we made.
            </p>
            <figure className='my-5 flex justify-evenly items-center content-center'>
              <Image
                src={'/spot-web-app/spot-1.png'}
                alt='spot-1'
                width={700}
                height={700}
              />
            </figure>
            <p className='my-5'>
              The image above is the product at its most recent state. In the top right corner you can see the image
              icon for the user. It is a clickable button that lets you log in. Then the log out button is
              next to it. To the left, we have a basic side bar for entering other sections of our page. If we
              wanted to search for a song, we would enter the next section Create Playlist.
            </p>
            <figure className='my-5 flex justify-evenly items-center content-center'>
              <Image
                src={'/spot-web-app/spot-2.png'}
                alt='spot-2'
                width={700}
                height={700}
              />
            </figure>
            <p className='my-5'>
              For the search above, it is a search for an artist known as IU. The results display any 
              artist matching the search value. There are other search parameters, such as song name 
              and genre, but I didn't have any images for that. Lastly, the one beneath is an image
              from early production, but it basically has the same layout as the recent product. It
              displays the top 5 songs from the artist. The only thing that the image is missing is
              an additional implementation of a related section beneath it. The related section displayed
              related artists.
            </p>
            <figure className='mb-5 flex justify-evenly items-center content-center'>
              <Image
                src={'/spot-web-app/spot-3.png'}
                alt='spot-3'
                width={700}
                height={700}
              />
            </figure>
          </div>
        </div>
      </article>
      <RightPageNav items={projectSpot}/>
    </>
  )
}

export default SpotColWebAppPage