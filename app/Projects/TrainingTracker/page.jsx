'use client';

import Image from "next/image";

import { projectTrain } from "@/constants";
import RightPageNav from "@/components/RightPageNav";
import Linkable from "@/components/Linkable";

import { useInView } from "react-intersection-observer";

const TrainingTrackerPage = () => {
  const {ref: toolsRef, inView: toolsView, entry: toolsEntry} = useInView({
    threshold: 0.4
  });
  const {ref: currentRef, inView: currentView, entry: currentEntry} = useInView({
    threshold: 0.1
  });

  projectTrain[0].inView = toolsView
  projectTrain[1].inView = currentView

  return (
    <>
      <article className='w-full min-w-0 max-w-6xl mt-4 px-1 md:px-6 
      min-h-[calc(100vh-103px)] block' 
      >
        <div className='max-w-none'>
          <h1 className='break-words text-4xl font-semibold mb-8'>Training Tracker</h1>
          <p className='text-base my-5'>
            This is my second offical app. I am working with another person. They provided the idea for creating
            a mobile app to track workout days and their specific workouts. Then we worked together to figure
            out how we should implement it. The app utilizes similar tools as the first mobile app, but it is
            definitely more functional.
          </p>
          <div ref={toolsRef}>
            <h2 id="tools" className='border-t border-gray-300 pt-10 mt-12 mb-6 
            font-semibold text-2xl scroll-mt-[75px]'>
              Tools Used
            </h2>
            <p className="mb-5">
              I started this project after my time in college. Before, I never really understood file structure
              or how packages worked. Packages were rarely present in my past projects, but for this project 
              I started to use a lot more. I will only name a few here that were useful at the time 
              of development.
            </p>
            <p className="my-5">
              Because we are using flutter for this project, many of the front-end components are already provided.
              However, I wanted more components to help bring the app to 
              life. <Linkable
                link='https://pub.dev/packages/expandable'
                text='Expandable'
              />
              , <Linkable
                link='https://pub.dev/packages/flutter_slidable'
                text='Slidable'
              />
              , and <Linkable
                link='https://pub.dev/packages/animations'
                text='Animations'
              /> helped satistify what I needed. These packages helped create smooth animated components.
            </p>
            <figure className='my-5 flex xl:flex-row flex-col justify-evenly items-center'>
              <Image
                src='/training-track/expandable_demo_small.gif'
                alt="expandable"
                width={250}
                height={250}
              />
              <div className="flex flex-col xl:ml-5 xl:mt-0 mt-5">
                <Image
                  src='/training-track/stretch_motion.gif'
                  alt="slidable"
                  width={500}
                  height={500}
                  className="mb-5"
                />
                <Image
                  src='/training-track/container_transform_lineup.gif'
                  alt="animations"
                  width={500}
                  height={500}
                  className="mt-5"
                />
              </div>
            </figure>
            <p className="my-5">
              The gifs above help show what can be done using those packages. They can also be found
              in the links above on their respective package site.
            </p>
            <p className="my-5">
              Compared to Sous Chef (the first mobile app) the backend storage was easier to implement and
              smaller. We
              used <Linkable 
                link='https://pub.dev/packages/hive' 
                text='Hive'
              />. This package allowed us to have data stored on local devices rather than a database.
              We wanted something that didn't deal with an online database, such as Firebase or MongoDB. We wanted
              something simplier and straightforward.
            </p>
            <p className="my-5">
              Next, to get data around the app, we used providers. Specifially from the 
              package <Linkable
                link='https://riverpod.dev/'
                text='Riverpod'
              />. I am going to be honest. At the time of writing this, providers are a completely new topic
              for me. I don't really understand how they work or why we would use them. I tried watching videos
              and reading documentation to understand what they are, but I am still having trouble understanding
              them. However, it seems like it is an easy way for passing data throughout the entire app. I had
              trouble working with Riverpod and storing our classes into our storage Hive. It was still a great
              experience though. I learned how to jsonify and automate the creation of classes to help store
              them into databases.
            </p>
            <figure className='mb-5 flex justify-evenly items-center'>
              <Image
                src='/training-track/hive.svg'
                alt="hive"
                width={250}
                height={250}
              />
              <Image
                src='/training-track/riverpod.png'
                alt="expandable"
                width={250}
                height={250}
              />
            </figure>
          </div>
          <div ref={currentRef}>
            <h2 id="current" className='border-t border-gray-300 pt-10 mt-12 mb-6 
            font-semibold text-2xl scroll-mt-[75px]'>
              Current State
            </h2>
            <p className="mb-5">
              The app is still a work in progress; however, I am proud to say that its fully functional.
              The only major things that need to be done are front-end modification. I'm not really creative,
              but I do want to learn how to make an app/website look nice and feel good to use. Below will be
              a series of videos showing off what the app can do at the moment.
            </p>
            <p className="my-5">
              Add, Edit, and Delete workout day. In the example, I added arms as a day. Deleted chest.
              Then edited arms and changed it into chest.
            </p>
            <figure className='my-5 flex xl:flex-row flex-col justify-evenly items-center'>
              <Image
                src='/training-track/add.gif'
                alt="add day"
                width={200}
                height={200}
              />
              <Image
                src='/training-track/delete.gif'
                alt="delete day"
                width={200}
                height={200}
                className="my-5 xl:my-0"
              />
              <Image
                src='/training-track/edit.gif'
                alt="edit workout"
                width={200}
                height={200}
              />
            </figure>
            <p className="my-5">
              Transitions from 'day' to 'workout' page. Then 'workout' to the 'add workout' page.
            </p>
            <figure className='my-5 flex xl:flex-row flex-col justify-evenly items-center'>
              <Image
                src='/training-track/transition.gif'
                alt="transition-1"
                width={250}
                height={250}
              />
              <Image
                src='/training-track/transition-2.gif'
                alt="transition-2"
                width={250}
                height={250}
                className="mt-5 xl:mt-0"
              />
            </figure>
            <p className="my-5">
              Add specific workout to a day. In this case, I added a chest workout (bench press) into
              the chest day. In addition, I added other information, such as a description and weight.
            </p>
            <figure className='my-5 flex justify-evenly items-center'>
              <Image
                src='/training-track/add-workout.gif'
                alt="add workout"
                width={250}
                height={250}
              />
            </figure>
            <p className="my-5">
              This examples shows the newly created workout and how slide also works here to edit and delete.
              Also, it shows the expand feature to show the extra description that was added.
            </p>
            <figure className='mb-5 flex justify-evenly items-center'>
              <Image
                src='/training-track/workout-slide-expand.gif'
                alt="slide and expand demo"
                width={250}
                height={250}
              />
            </figure>
          </div>
        </div>
      </article>
      <RightPageNav items={projectTrain}/>
    </>
  )
}

export default TrainingTrackerPage