'use client';

import Image from "next/image"

import { useInView } from "react-intersection-observer";

import { projectSous } from "@/constants";

import RightPageNav from "@/components/RightPageNav";
import Linkable from "@/components/Linkable";

const SousChefPage = () => {
  const {ref: toolsRef, inView: toolsView, entry: toolsEntry} = useInView({
    threshold: 1
  });
  const {ref: resultsRef, inView: resultsView, entry: resultsEntry} = useInView({
    threshold: 0.25
  });

  projectSous[0].inView = toolsView;
  projectSous[1].inView = resultsView;
  
  return (
    <>
      <article className='project_article'>
        <div className='max-w-none'>
          <h1 className='break-words text-4xl font-semibold mb-8'>Sous Chef Mobile App</h1>
          <p className='text-base my-5'>
            Mobile App Development always interested me. Therefore, I wanted to try making one.
            I found Flutter and its language Dart to help create a mobile app. I know of Kotlin,
            but I saw that Flutter included pre-made components and can easily be used to create
            a cross platform application. Sous Chef was created to help people write down recipes,
            list ingredients and steps, and store other media, such as videos and images.
          </p>
          <h2 ref={toolsRef} id='tools' className='border-t border-gray-300 pt-10 mt-12 mb-6 
          font-semibold text-2xl scroll-mt-[75px]'>
            Tools Used
          </h2>
          <p className="mb-5">
            For this app, I only needed a few items to create 
            it. <Linkable
              link='https://flutter.dev/'
              text='Flutter'
            /> provided many of the front-end
            tools, such as components and routing. It's a open source UI software development kit created
            by Google. 
          </p>
          <p className="my-5">
            Because I wanted this app to be a social app and a place to store data, I needed a
            back-end. As a result, I 
            used <Linkable
              link='https://firebase.google.com/'
              text='Firebase'
            />. It was pretty easy to connect Firebase to Flutter. Just download a few packages 
            and everything should be up and running. The docs on Firebase and many videos online
            helped with the configuration.
          </p>
          <figure className='mb-5 flex justify-evenly items-center content-center'>
            <Image
              src={'/sous-chef/flutter.png'}
              alt='flutter image'
              width={150}
              height={150}
            />
            <Image
              src={'/sous-chef/firebase.png'}
              alt='firebase image'
              width={150}
              height={150}
            />
          </figure>
          <div ref={resultsRef}>
            <h2 id='results' className='border-t border-gray-300 pt-10 mt-12 mb-6 
            font-semibold text-2xl scroll-mt-[75px]'>
              Results
            </h2>
            <p className="mb-5">
              As of right now, the App is no longer on the Google Play Store. I did not maintain it,
              and I was inactive for a long time. In addition, the app can only store recipes on the 
              public level. This means anyone can see the recipe that has been recorded. I did not have
              a chance to implement authenthication/account login. 
            </p>
            <figure className='my-5 flex justify-evenly items-center content-center'>
              <Image
                src={'/sous-chef/main.jpg'}
                alt='main page image'
                width={300}
                height={300}
              />
            </figure>
            <p className="my-5">
              The above is the main page for the mobile app. It contains cards for the recipe. The image is
              selected from the media tab that will be shown below.
            </p>
            <p className="my-5">
              The page below opens when you click on the recipe card. It contains three tabs. One for
              ingredients, another for the steps, and finally a media tab. The ingredients and step tab
              should look the same. They have the same container and layout. It just wasn't fully fleshed
              out yet. Because I couldn't get the app working again and it is no longer on the app store,
              I don't have an image for the media tab.
            </p>
            <figure className='my-5 flex justify-evenly items-center content-center'>
              <Image
                src={'/sous-chef/ingredients.jpg'}
                alt='ingredients page image'
                width={300}
                height={300}
              />
            </figure>
            <p className="mb-5">
              Overall, I would say this project is incomplte and only about 20% done. There are a lot of
              improvements that could be done. In addition, organization has to be improved for
              both the database and the source code. I do want to come back to this one day. Next time,
              I'll start from the bottom again instead of building on top of this verison.
            </p>
          </div>
        </div>
      </article>
      <RightPageNav items={projectSous}/>
    </>
  )
}

export default SousChefPage