'use client';

import { motion } from "framer-motion"

const Wavetext = ({ text, textStyle="", containerStyle="" }) => {
  const letters = Array.from(text);

  const container = {
    hidden: {
      opacity: 0,
    },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.4,
        staggerChildren: 0.05,
        duration: 0.7,
      }
    },
  };

  const child = {
    visible: {
      opacity: 1,
      y: [0, -20, 0],
      transition: {
        type: "spring",
        damping: 12,
        stiffness: 200,
        y: {
          repeat: Infinity,
          repeatType: "loop",
          ease: "easeOut",
          duration: 0.7,
          repeatDelay: 7
        }
      }
    },
    hidden: {
      opacity: 0,
    },
  };

  return (
    <motion.h1
      style={{ display: "flex" }}
      initial="hidden"
      animate={"visible"}
      variants={container}
      className={containerStyle}
    >
      {letters.map((letter, index) => (
        <motion.span
          key={index}
          variants={child}
          className={textStyle}
        >
          {letter === " " ? "\u00A0" : letter}
        </motion.span>
      ))}
    </motion.h1>
  )
}

export default Wavetext