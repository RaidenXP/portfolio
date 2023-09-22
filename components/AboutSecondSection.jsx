"use client";

import Image from "next/image";

import { motion } from "framer-motion";

const boxVariantOne = {
  hidden: {
    opacity: 0,
    x: -100
  },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      type: "spring",
      damping: 12,
      stiffness: 200,
    }
  }
}

const boxVariantTwo = {
  hidden: {
    opacity: 0,
    x: 100
  },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      type: "spring",
      damping: 12,
      stiffness: 200,
    }
  }
}

const textVariant = {
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

const AboutSecondSection = () => {
  return (
    <section>
      <div className="h-[150px] bg-[rgb(120,187,226)]"/>
      <div className="bg-gradient-to-b from-[rgb(120,187,226)] to-[#21C694] h-[500px]"/>
      <motion.section
        initial={"hidden"}
        whileInView={"visible"}
        viewport={{
          amount: 0.75,
          once: true
        }}
        transition={{
          staggerChildren: 0.3,
          duration: 2,
        }} 
        className='flex flex-col relative bg-[#21C694] w-full 
        md:h-[calc(100vh-70px)] h-[calc(100vh-102px)] overflow-hidden'
      >
        <motion.div
          className="m-auto font-semibold text-6xl"
          variants={textVariant}
        >
          Education
        </motion.div>
        <div className="grid justify-items-center h-full items-center">
          <div className="relative sm:w-[500px] w-[90%] h-[500px]">
            <motion.div
              className="absolute -top-[10%] h-[500px] w-[100%] bg-gray-200 rounded-xl 
              bg-clip-padding backdrop-filter backdrop-blur-2xl bg-opacity-10 shadow-2xl p-10"
              variants={boxVariantOne}
            >
              <p className="mb-5">
                For my first two years in college, I studied at the Coast Community Colleges.
                I took classes from all three sister schools. Most of my GE's were done
                there, and my first programming language was C++. Eventually, I transfered to Cal Poly
                Pomona. The school's main language is Java, but there were many courses
                that used other languages too. Some important courses that I took include:
                Software Engineering, Data Structures, and Algorithms.
              </p>
              <p>
                I graduated from Community College in 2020 with an Associates Degree in Art and a
                4.0 GPA. Then I graduated from Cal Poly Pomona in the winter 
                of 2022 with a Bachelor's of Science in Computer Science and a total GPA of 3.98.
              </p>
            </motion.div>
            <motion.div
              className="absolute sm:-right-[10%] sm:-bottom-[15%] z-[1] flex sm:flex-col items-center 
              justify-around sm:h-[250px] sm:w-[250px] h-[30%] w-[100%] bg-gray-200 rounded-xl 
              bg-clip-padding backdrop-filter backdrop-blur-2xl bg-opacity-10 shadow-2xl
              -right-[4%] -bottom-[7%]"
              variants={boxVariantTwo}
            >
              <Image
                src={"/about/Cal_Poly_Pomona_Broncos_logo.png"}
                width={200}
                height={200}
                alt="Cal Poly Pomona Logo"
              />
              <Image
                src={"/about/CCCD-Schools_temp.jpg"}
                width={200}
                height={200}
                alt="Coast Colleges Logo"
                className="rounded-lg"
              />
            </motion.div>
          </div>
        </div>
      </motion.section>
    </section>
  )
}

export default AboutSecondSection