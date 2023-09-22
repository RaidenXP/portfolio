"use client";

import { motion } from "framer-motion";

const contents = {
  hidden: {
    opacity: 0
  },
  visible: {
    opacity: 1,
    transition: {
      duration: 0.7
    }
  }
}

const AboutThirdSection = () => {
  return (
    <section>
      <div className="h-[150px] bg-[#21C694]"/>
      <div className="bg-gradient-to-b from-[#21C694] to-[#218FC6] h-[500px]"/>
      <motion.section 
        initial={"hidden"}
        whileInView={"visible"}
        viewport={{
          amount: 0.90,
          once: true,
        }}
        transition={{
          staggerChildren: 0.3,
          duration: 3,
        }} 
        className='flex flex-col justify-center items-center w-full bg-[#218FC6] 
        md:h-[calc(100vh-70px)] h-[calc(100vh-102px)]'
      >
        <motion.h1
          variants={contents}  
          className="text-[20vw] lg:mr-52 mb-10 font-semibold"
        >
            Goals
        </motion.h1>
        <div className="lg:absolute relative lg:left-[50%] lg:w-[50%] w-full h-full">
          <motion.div
            variants={contents} 
            className="absolute lg:top-[16%] lg:left-[20%] h-[200px] w-[300px] bg-gray-200 rounded-xl 
            bg-clip-padding backdrop-filter backdrop-blur-2xl bg-opacity-10 shadow-2xl p-5 z-[1]
            text-white sm:left-[30%] left-[10%]"
          >
            First and asap, I would like to find a job where I can improve my programming and
            teamwork skills. I hope I can find a mentor to help show me the ropes, and meet 
            others who I can also learn from.
          </motion.div>
          <motion.div
            variants={contents}  
            className="absolute lg:top-[38%] lg:left-[35%] h-[200px] w-[300px] bg-gray-200 rounded-xl 
            bg-clip-padding backdrop-filter backdrop-blur-2xl bg-opacity-10 shadow-2xl p-5 z-[2]
            text-white sm:left-[50%] top-[30%] left-[35%]"
          >
            Next, I would love to make a video game. I do plan on working on a game real soon.
            This first game will help me get use to the engine and any new programming languages.
            Eventually, I would love to have my first official game playable.
          </motion.div>
          <motion.div
            variants={contents}  
            className="absolute lg:top-[60%] lg:left-[20%] h-[200px] w-[300px] bg-gray-200 rounded-xl 
            bg-clip-padding backdrop-filter backdrop-blur-2xl bg-opacity-10 shadow-2xl p-5 z-[3]
            text-white sm:left-[30%] top-[61%] left-[10%]"
          >
            Third, I want to keep continuing to learn and improve. I want to make sure I keep this
            mindset and never stop. Gaining experiences and becoming a better person has always been a goal for me.
          </motion.div>
        </div>
      </motion.section>
    </section>
  )
}

export default AboutThirdSection