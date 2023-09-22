'use client';

import { motion } from "framer-motion";

const Ocean = () => {
  return (
    <>
      <motion.div
        className="absolute bottom-0 left-0 w-full h-[200px] z-[98] opacity-100 bg-x-repeat
        bg-[length:752px_200px]"
        style={{
          backgroundImage: `url('/about/wave.svg')`,
        }}
        animate={{
          backgroundPositionX: "752px",
          animationDelay: '0s',
        }}
        transition={{
          ease: [0.36, 0.45, 0.63, 0.53],
          duration: 15,
          repeat: Infinity,
        }}
      />
      <motion.div
        className="absolute bottom-[10px] left-0 h-[200px] w-full z-[97] opacity-50 bg-x-repeat
        bg-[length:752px_200px]"
        style={{
          backgroundImage: `url('/about/wave.svg')`,
        }}
        animate={{
          backgroundPositionX: '-752px',
          animationDelay: '-5s',
          translateY: ['0px', '10px', '0px']
        }}
        transition={{
          ease: [0.36, 0.45, 0.63, 0.53],
          duration: 15,
          repeat: Infinity,
        }}
      />
      <motion.div
        className="absolute bottom-[15px] left-0 h-[200px] w-full z-[96] opacity-20 bg-x-repeat
        bg-[length:750px_200px]"
        style={{
          backgroundImage: `url('/about/wave.svg')`,
        }}
        animate={{
          backgroundPositionX: '750px',
          animationDelay: '-2s',
        }}
        transition={{
          ease: [0.36, 0.45, 0.63, 0.53],
          duration: 30,
          repeat: Infinity,
        }}
      />
      <motion.div
        className="absolute bottom-[20px] left-0 h-[200px] w-full z-[95] opacity-70 bg-x-repeat
        bg-[length:750px_200px]"
        style={{
          backgroundImage: `url('/about/wave.svg')`,
        }}
        animate={{
          backgroundPositionX: "-750px",
          animationDelay: '-5s',
          translateY: ['-25px', '5px', '-25px']
        }}
        transition={{
          ease: [0.36, 0.45, 0.63, 0.53],
          duration: 5,
          repeat: Infinity,
        }}
      />
    </>
  )
}

export default Ocean