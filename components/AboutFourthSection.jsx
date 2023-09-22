"use client";

import { motion } from "framer-motion";

import Image from "next/image"

const contents = {
  hidden: {
    y: 100,
    opacity: 0
  },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      type: "spring",
      damping: 12,
      stiffness: 200,
    }
  }
}

const title = {
  hidden: {
    opacity: 0
  },
  visible: {
    opacity: 1,
    transition: {
      duration: 1
    }
  }
}

const AboutFourthSection = () => {
  return (
    <section>
      <div className="h-[150px] bg-[#218FC6]"/>
      <div className="bg-gradient-to-b from-[#218FC6] to-[#A521C6] h-[500px]"/>
      <motion.section 
        initial={"hidden"}
        whileInView={"visible"}
        viewport={{
          amount: 0.85,
          once: true
        }}
        transition={{
          staggerChildren: 0.3,
        }} 
        className='lg:grid relative grid-cols-2 bg-[#A521C6] w-full 
        md:h-[calc(100vh-70px)] h-[calc(100vh-102px)] flex flex-col'
      >
        <motion.h1
            variants={title} 
            className="lg:absolute text-white lg:right-[20%] top-[0%] font-semibold text-[10vw] z-[1] text-center"
          >
            Hobbies
        </motion.h1>
        <div className="flex lg:relative absolute flex-col items-center lg:justify-center justify-evenly 
        h-full w-full px-5">
          <motion.div
            variants={contents}
          >
            <Image
              src={"/about/game.jpg"}
              width={500}
              height={500}
              alt="game"
              className="rounded-xl lg:ml-36 lg:mb-5 shadow-xl"
            />
          </motion.div>
          <motion.div
            variants={contents}
          >
            <Image
              src={"/about/content.jpg"}
              width={500}
              height={500}
              alt="Content"
              className="rounded-xl lg:ml-5 shadow-xl"
            />
          </motion.div>
        </div>
        <div className="flex items-center lg:justify-start justify-center">
          <motion.div 
            variants={contents}
            className="sm:w-[500px] xl:mr-0 mx-10 md:mt-28 mt-20 bg-gray-200 rounded-xl 
            bg-clip-padding backdrop-filter backdrop-blur-2xl 
            bg-opacity-10 shadow-2xl p-5 z-[5] text-white"
          >
            <p>
              On my free time, I love playing video games and hanging out with my friends.
              Video games are an important part of my life. I grew up playing games.
              My father used to play games on the Playstation 1 and Xbox. Eventually,
              I started playing on those consoles and many more. I played with friends
              whenever I could. Especially at parties or gathering. However, as online features grew, 
              video games became easier to play online with others. Soon, I hope to start developing
              games and have it be another hobby I enjoy.
            </p>
            <p className="mt-5">
              Another thing I enjoy doing in my free time, is consuming content. This includes
              shows, streams, music, or informational videos. I like to always have noise
              playing even if I am not paying attention. The noise helps me focus on
              whatever I am working on, and sometimes I may run into something interesting.
              I love to watch action packed shows, listen to any type of music, and learn
              from any informative media, such as news channels or tutorials.
            </p>
          </motion.div>
        </div>
      </motion.section>
      <div className="h-[150px] bg-[#A521C6]"/>
    </section>
  )
}

export default AboutFourthSection